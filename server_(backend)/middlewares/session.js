const { parseToken } = require('../services/userService');


module.exports = () => (req, res, next) => {
    if (req.headers?.['authorization'].length) {
        try {
            const token = req.headers['authorization'].replace('Bearer ', '');
            const payload = parseToken(token);
            req.user = payload;
            req.token = token;

            return next();
        } catch (err) {
            return res.status(401).json({ message: 'Invalid authorization token'});
        }
    }

    next();
};
