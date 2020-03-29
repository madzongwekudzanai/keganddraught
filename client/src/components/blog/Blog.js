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
            <h2>Blog Draught</h2>
            <p>
              Whatever you do, do it well. Do it so well that when people see
              you do it they will want to come back and see you do it again and
              they will want to bring others and show them how well you do what
              you do.
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
