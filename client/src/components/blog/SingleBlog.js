import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const SingleBlog = ({ post: { _id, title, date, blogImage, text } }) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-blog">
        <div className="row align-items-center">
          <div className="col-lg-12 col-xl-6 pr-0">
            <div className="blog-img">
              <Link to={`/blog/${_id}`}>
                <img src={`/blog/${blogImage}`} alt="Blog Image" />
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 pl-0">
            <div className="blog-text">
              <span>
                <i className="fa fa-calendar"></i>
                <Moment format="DD MMMM YYYY">{date}</Moment>
              </span>
              <h3>
                <Link className="trunk" to={`/blog/${_id}`}>
                  {title}
                </Link>
              </h3>
              <p className="trunk">{text}</p>
              <Link to={`/blog/${_id}`} className="read-more">
                Continue
                <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  post: PropTypes.object.isRequired
};

export default SingleBlog;
