import logging
from logging.handlers import SMTPHandler
from werkzeug.contrib.fixers import ProxyFix
from flask import Flask, render_template
from celery import Celery
from itsdangerous import URLSafeTimedSerializer
from server.blueprints.admin import admin
from server.blueprints.home import home
from server.blueprints.blog import blog
from server.blueprints.blog import posts_api
from server.blueprints.blog import comments_api
from server.blueprints.practice_area import practice_areas_api
from server.blueprints.staff import staff_api
from server.blueprints.client import clients_api
from server.blueprints.user import users_api
from server.blueprints.client import matters_api
from server.blueprints.admin import admin_api
from server.blueprints.contact import contact
from server.blueprints.user import user
from server.blueprints.user.models import User
from server.blueprints.practice_area import practice_areas
from server.extensions import (
    debug_toolbar,
    mail,
    csrf,
    db,
    login_manager,
    limiter,
    jwt
)

CELERY_TASK_LIST = [
    'server.blueprints.contact.tasks',
    'server.blueprints.user.tasks'
]

def create_celery_app(app=None):
    """
    Create new Celery object and tie Celery config to app config. 
    Wrap all tasks in app context.

    :param app: Flask app
    :return: Celery app
    """
    app = app or create_app()

    celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'],
                    include=CELERY_TASK_LIST)
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery


def create_app():
    """
    Create Flask app using app factory pattern.

    :param settings_override: Override settings
    :return: Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.default')
    app.config.from_pyfile('config.py', silent=True)
    app.config.from_envvar('APP_SETTINGS')

    middleware(app)
    error_templates(app)
    exception_handler(app)
    app.register_blueprint(admin)
    app.register_blueprint(home)
    app.register_blueprint(blog)
    app.register_blueprint(contact)
    app.register_blueprint(user)
    app.register_blueprint(practice_areas)
    app.register_blueprint(admin_api.blueprint, url_prefix='/api')
    app.register_blueprint(posts_api.blueprint, url_prefix='/api')
    app.register_blueprint(comments_api.blueprint, url_prefix='/api')
    app.register_blueprint(practice_areas_api.blueprint, url_prefix='/api')
    app.register_blueprint(staff_api.blueprint, url_prefix='/api')
    app.register_blueprint(clients_api.blueprint, url_prefix='/api')
    app.register_blueprint(users_api.blueprint, url_prefix='/api')
    app.register_blueprint(matters_api.blueprint, url_prefix='/api')
    extensions(app)
    authentication(app, User)

    return app


def extensions(app):
    """
    Register extensions.

    :param app: Flask application instance
    :return: None
    """
    debug_toolbar.init_app(app)
    mail.init_app(app)
    csrf.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    limiter.init_app(app)
    jwt.init_app(app)

    return None


def authentication(app, user_model):
    """
    Initialize the Flask-Login extension.

    :param app: Flask application instance
    :param user_model: Model that contains the authentication information
    :type user_model: SQLAlchemy model
    :return: None
    """
    login_manager.login_view = 'user.login'

    @login_manager.user_loader
    def load_user(uid):
        return user_model.query.get(uid)

    @login_manager.token_loader
    def load_token(token):
        duration = app.config['REMEMBER_COOKIE_DURATION'].total_seconds()
        serializer = URLSafeTimedSerializer(app.secret_key)

        data = serializer.loads(token, max_age=duration)
        user_uid = data[0]

        return user_model.query.get(user_uid)


def middleware(app):
    """
    Register middleware.

    :param app: Flask application instance
    :return: None
    """
    # Swap request.remote_addr with the real IP address even if behind a proxy.
    app.wsgi_app = ProxyFix(app.wsgi_app)

    return None


def error_templates(app):
    """
    Register custom error pages.

    :param app: Flask application instance
    :return: None
    """

    def render_status(status):
        """
         Render a custom template for a specific status.
           Source: http://stackoverflow.com/a/30108946

         :param status: Status as a written name
         :type status: str
         :return: None
         """
        # Get the status code from the status, default to a 500 so that we
        # catch all types of errors and treat them as a 500.
        code = getattr(status, 'code', 500)
        return render_template('{0}.html'.format(code)), code

    for error in [404, 429, 500]:
        app.errorhandler(error)(render_status)

    return None


def exception_handler(app):
    """
    Register exception handlers.

    :param app: Flask application instance
    :return: None
    """
    mail_handler = SMTPHandler((app.config.get('MAIL_SERVER'),
                                app.config.get('MAIL_PORT')),
                               app.config.get('MAIL_USERNAME'),
                               [app.config.get('MAIL_USERNAME')],
                               '[Exception handler] A 5xx was thrown',
                               (app.config.get('MAIL_USERNAME'),
                                app.config.get('MAIL_PASSWORD')),
                               secure=())

    mail_handler.setLevel(logging.ERROR)
    mail_handler.setFormatter(logging.Formatter("""
    Time:               %(asctime)s
    Message type:       %(levelname)s


    Message:

    %(message)s
    """))
    app.logger.addHandler(mail_handler)

    return None
