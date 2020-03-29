import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import SingleLatest from "./SingleLatest";
import SingleComment from "./SingleComment";
import SingleBlogDetail from "./SingleBlogDetail";
import SearchForm from "./SearchForm";
import { getPost, getThreePost, addComment } from "../../actions/post";
import { connect } from "react-redux";

const BlogDetail = ({
  addComment,
  auth,
  match,
  getPost,
  getThreePost,
  post: { threePosts, loading },
  singlePost
}) => {
  useEffect(() => {
    getPost(match.params.id);
    getThreePost();
  }, [getPost, getThreePost]);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addComment(match.params.id, { text });
    setText("");
  };
  return loading || singlePost === null ? (
    <Spinner />
  ) : (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <SingleBlogDetail singlePost={singlePost} />
              <div className="comments-area">
                <h3 className="comments-title">
                  {singlePost.comments.length} Comments:
                </h3>
                <ol className="comment-list">
                  {singlePost.comments.map(comment => (
                    <SingleComment
                      key={match.params.id}
                      comment={comment}
                      id={match.params.id}
                    />
                  ))}
                </ol>
                {auth.isAuthenticated ? (
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <form
                      className="comment-form"
                      onSubmit={e => {
                        onSubmit(e);
                      }}
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          rows="5"
                          maxLength="65525"
                          required
                          value={text}
                          onChange={e => {
                            onChange(e);
                          }}
                        ></textarea>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          readOnly={true}
                          value={auth.user.name}
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          readOnly={true}
                          value={auth.user.email}
                        />
                      </p>
                      <div className="post-a-comment">
                        <button type="submit" className="btn default-btn">
                          POST A COMMENT
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <aside className="widget-area" id="secondary">
              <SearchForm />
              <section className="widget widget_zovio_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>
                {threePosts.map(post => (
                  <SingleLatest key={post._id} post={post} />
                ))}
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogDetail.propTypes = {
  getPost: PropTypes.func.isRequired,
  getThreePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  singlePost: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  singlePost: state.post.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost, getThreePost, addComment })(
  BlogDetail
);
