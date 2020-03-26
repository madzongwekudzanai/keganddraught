import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const SingleLatest = ({ post: { title, blogImage, _id, date } }) => {
  return (
    <article className="item">
      <Link to={`/blog/${_id}`} className="thumb">
        <span
          className="fullimage cover"
          style={{
            backgroundImage: `url(/blog/${blogImage})`
          }}
          role="img"
        ></span>
      </Link>
      <div className="info">
        <time dateTime="2019-06-30">
          <Moment format="MMMM DD, YYYY">{date}</Moment>
        </time>
        <h4 className="title usmall">
          <Link className="trunk" to={`/blog/${_id}`}>
            {title}
          </Link>
        </h4>
      </div>
      <div className="clear"></div>
    </article>
  );
};

SingleLatest.propTypes = {
  post: PropTypes.object.isRequired
};

export default SingleLatest;
