import React, { Component, PropTypes } from 'react';
import { IndexLink, Link, withRouter } from 'react-router';
import classNames from 'classnames';

class NavLink extends Component {
  render() {
    const { router, linkText, endpoint, index } = this.props;
    const isActive = router.isActive(endpoint, true);

    return (
      <li className={classNames({"active": isActive})}>
        {index ? (
          <IndexLink to={endpoint}>
            {linkText}
          </IndexLink>
        ) : (
          <Link to={endpoint}>{linkText}</Link>
        )}
      </li>
    );    
  }
}

NavLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  index: PropTypes.bool.isRequired
};

export default withRouter(NavLink);