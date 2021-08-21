import React from 'react';
import welcome from './coverimages/welcome.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<section className="welcome-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="welcome-img">
							<img src={welcome} alt="Welcome" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="welcome-text">
							<span>Welcome To</span>
							<h2>Keg & Draught</h2>
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts. Separated
								they live in Bookmarksgrove right at the coast of the Semantics,
								a large language ocean.
							</p>
							<p>
								Even the all-powerful Pointing has no control about the blind
								texts it is an almost unorthographic life One day however a
								small line of blind text by the name of Lorem Ipsum decided to
								leave for the far World of Grammar.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="contact-info-wrap">
							<div className="row">
								<div className="col-lg-4 col-sm-6 p-0">
									<div className="contact-info">
										<i className="fa fa-phone"></i>
										<span>(Hot Line)</span>
										<h3>+263 775 923 028</h3>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6 p-0">
									<div className="contact-info border-left-right">
										<i className="fa fa-clock-o"></i>
										<span>We’re Open</span>
										<h3>Mon-Sat: 8 AM - 10PM</h3>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
									<div className="contact-info">
										<i className="fa fa-arrow-right"></i>
										<span>Follow Us</span>
										<ul>
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
													<i className="fab fa-pinterest-p"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
