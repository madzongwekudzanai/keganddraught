import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { searchPosts } from "../../actions/post";

const SearchForm = ({ searchPosts, post: { loading, searchedPosts } }) => {
  const [text, setText] = useState("");
  const onChange = e => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log("search");
    searchPosts(text);
    setText("");
  };

  if (searchedPosts.length >= 1 && loading === false) {
    return <Redirect to="/search" />;
  }

  return (
    <div className="widget widget_search">
      <form
        className="search-form"
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <input
          onChange={e => {
            onChange(e);
          }}
          required
          value={text}
          type="search"
          placeholder="Search..."
          className="search-field"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

SearchForm.propTypes = {
  searchPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { searchPosts })(SearchForm);
