import React from "react";
import blogImg from "../layout/coverimages/blog/1.jpg";
import auth from "../layout/coverimages/11.jpg";

const BlogDetail = () => {
  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={blogImg} alt="image" />
              </div>
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Posted On:</span>
                      <a href="/">September 31, 2020</a>
                    </li>
                    <li>
                      <span>Posted By:</span>
                      <a href="/">John Anderson</a>
                    </li>
                  </ul>
                </div>
                <h3>
                  I’ll Drink to that: Bruce Neyars of Neyars Vineyards, Receipe
                  from a Winemaker Restaurent
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
              </div>
              <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="fa fa-share"></i>
                  </span>
                  <a href="/">Share</a>
                </div>
                <div className="article-share">
                  <ul className="social">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>
                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img src={auth} alt="Image" className="avatar" />
                          <b className="fn">John Jones</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="/">
                            <span>April 24, 2019 at 10:59 am</span>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="/" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img src={auth} alt="Image" className="avatar" />
                          <b className="fn">John Jones</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="/">
                            <span>April 24, 2019 at 10:59 am</span>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="/" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>
                  <form className="comment-form">
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
                      ></textarea>
                    </p>
                    <p className="comment-form-author">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input type="text" id="author" name="author" required />
                    </p>
                    <p className="comment-form-email">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input type="text" id="email" name="email" required />
                    </p>
                    <div className="post-a-comment">
                      <button type="submit" className="btn default-btn">
                        POST A COMMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <aside className="widget-area" id="secondary">
              <div className="widget widget_search">
                <form className="search-form">
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      placeholder="Search..."
                      className="search-field"
                    />
                  </label>
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <section className="widget widget_zovio_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <article className="item">
                  <a href="/" className="thumb">
                    <span className="fullimage cover bg1" role="img"></span>
                  </a>
                  <div className="info">
                    <time dateTime="2019-06-30">June 30, 2019</time>
                    <h4 className="title usmall">
                      <a href="/">Labour Chardony Godiba Choclates</a>
                    </h4>
                  </div>
                  <div className="clear"></div>
                </article>
                <article className="item">
                  <a href="/" className="thumb">
                    <span className="fullimage cover bg2" role="img"></span>
                  </a>
                  <div className="info">
                    <time dateTime="2019-06-30">June 30, 2019</time>
                    <h4 className="title usmall">
                      <a href="/">Labour Chardony Godiba Choclates</a>
                    </h4>
                  </div>
                  <div className="clear"></div>
                </article>
                <article className="item">
                  <a href="/" className="thumb">
                    <span className="fullimage cover bg3" role="img"></span>
                  </a>
                  <div className="info">
                    <time dateTime="2019-06-30">June 30, 2019</time>
                    <h4 className="title usmall">
                      <a href="/">Labour Chardony Godiba Choclates</a>
                    </h4>
                  </div>
                  <div className="clear"></div>
                </article>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
