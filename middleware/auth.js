const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header("Authorization")

    if (!token) {
        const err = new Error("Intruder go away")
        res.status = 403;
        return next(err)
    }
    jwt.verify(token, "abcd", (err, claims) => {
        if (err) {
            const err = new Error("Intruder go away")
            res.status = 403;
            return next(err)
        }
        res.locals.claims = claims
        next();
    })
}

module.exports = {
    authenticate
}