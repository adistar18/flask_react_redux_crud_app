import React, { Component, PropTypes } from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router';

export default class RelatedPost extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatchEvent } = this.props;
    dispatchEvent();
  }
  
  render() {
    const { post } = this.props;

    return (
      <div className="col-sm-4">
        <Link 
          to={`/blog/${post.id}`}
          onClick={this.handleClick}>          
          <div className="thumbnail">
            <div 
              className="thumbnail-image"
              style={{
                backgroundImage: `url('${post.imgSrc}')`
              }}/>
            <div className="caption">
              <p>More on {post.practiceArea}</p>
              <h4>
                {post.title}
              </h4>
              <Avatar
                avatarPhoto={post.authorPhoto}
                avatarText={post.author}/>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

RelatedPost.propTypes = {
  dispatchEvent: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};