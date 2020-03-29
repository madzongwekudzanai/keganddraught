import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const SingleBlogDetail = ({
  singlePost: { title, blogImage, _id, date, name, text }
}) => {
  return (
    <Fragment>
      <div className="article-image">
        <img src={`/blog/${blogImage}`} alt="Blog Image" />
      </div>
      <div className="article-content">
        <div className="entry-meta">
          <ul>
            <li>
              <span>Posted On:</span>{" "}
              <Link to={`/blog/${_id}`}>
                <Moment format="MMMM DD, YYYY">{date}</Moment>
              </Link>
            </li>
            <li>
              <span>Posted By:</span> <Link to={`/blog/${_id}`}>{name}</Link>
            </li>
          </ul>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="article-footer">
        <div className="article-tags">
          <a to="/">Follow</a>
        </div>
        <div className="article-share">
          <ul className="social">
            <li>
              <Link to="/contact">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

SingleBlogDetail.propTypes = {
  singlePost: PropTypes.object.isRequired
};

export default SingleBlogDetail;
