import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SingleBlog from "./SingleBlog";

const SearchResult = ({ post: { searchedPosts } }) => {
  return (
    <section className="blog-area ptb-100-70">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <span>Vineyard</span>
            <h2>Search Results</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices.
            </p>
          </div>
        </div>
        <div className="row">
          {searchedPosts.map(post => (
            <SingleBlog key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

SearchResult.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {})(SearchResult);
