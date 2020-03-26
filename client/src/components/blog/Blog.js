import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import SingleBlog from "./SingleBlog";
import Spinner from "../layout/Spinner";

const Blog = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <section className="blog-area ptb-100-70">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <span>Vineyard</span>
            <h2>Blog Wines</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices.
            </p>
          </div>
        </div>
        <div className="row">
          {posts.map(post => (
            <SingleBlog key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Blog);
