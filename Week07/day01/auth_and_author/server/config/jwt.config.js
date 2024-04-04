//thi s is used for authorized actions in api ,like we want to protect api route, it allow accss to authenticated users
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY

module.exports = {
    authenticate: (req, res, next) => {
        //verify will accept token which is generated in controller file]
        jwt.verify(req.cookies.usertoken, secret, (err, payload) => {

            if (err) {
                res.status(401).json({
                    verified: false
                })
            } else {
                next()
            }
        })
    }
}