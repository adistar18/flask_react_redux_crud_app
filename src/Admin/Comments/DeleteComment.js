import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GetJWTForm from 'Admin/GetJWTForm';
import DeleteCommentForm from './DeleteCommentForm';

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    ...authentication
  };
};

class DeleteComment extends Component {
  render() {
    const { JWT } = this.props;
    
    return (
      <div>
        {!JWT && <GetJWTForm/>}
        {JWT && <DeleteCommentForm/>}
      </div>
    );
  }
}

DeleteComment.propTypes = {
  JWT: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps, 
  null
)(DeleteComment);