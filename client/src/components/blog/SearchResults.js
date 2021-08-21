import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleBlog from './SingleBlog';

const SearchResult = ({ post: { searchedPosts } }) => {
	return (
		<section className="blog-area ptb-100-70">
			<div className="container">
				<div className="row">
					<div className="section-title">
						<span>Vineyard</span>
						<h2>Search Results</h2>
						<p>
							Whatever you do, do it well. Do it so well that when people see
							you do it they will want to come back and see you do it again and
							they will want to bring others and show them how well you do what
							you do.
						</p>
					</div>
				</div>
				<div className="row">
					{searchedPosts.map((post) => (
						<SingleBlog key={post._id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
};

SearchResult.propTypes = {
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, {})(SearchResult);
