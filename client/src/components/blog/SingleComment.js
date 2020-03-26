import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";

const SingleComment = ({
  comment: { text, name, avatar, date, _id, user },
  id,
  deleteComment,
  auth
}) => {
  return (
    <li className="comment">
      <div className="comment-body">
        <footer className="comment-meta">
          <div className="comment-author vcard">
            <img src={avatar} alt="Image" className="avatar" />
            <b className="fn">{name}</b>
            <span className="says">says:</span>
          </div>
          <div className="comment-metadata">
            <Link to="/">
              <span>
                <Moment format="MMMM DD, YYYY">{date}</Moment> at{" "}
                <Moment format="hh:mm a">{date}</Moment>
              </span>
            </Link>
          </div>
        </footer>
        <div className="comment-content">
          <p>{text}</p>
        </div>
        {auth.user && (
          <div className="reply">
            {!auth.loading && user === auth.user._id && (
              <a
                onClick={e => {
                  deleteComment(id, _id);
                }}
                className="comment-reply-link comment-delete"
              >
                Delete
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(SingleComment);
