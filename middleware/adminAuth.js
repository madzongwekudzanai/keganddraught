const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

module.exports = function (req, res, next) {
	// Get token from then header
	const token = req.header('y-auth-token');

	// Check in not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// Verify token
	try {
		const decoded = jwt.verify(token, jwtSecret);

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
