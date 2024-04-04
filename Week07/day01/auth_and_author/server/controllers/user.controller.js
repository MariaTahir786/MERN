const User = require('../models/user.model')
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    //register new user function which is async function
    register: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email }) //we check with email exists in db or not so we use find one and by user email user types
            if (potentialUser) {
                return res.status(400).json({
                    message: 'Email already exists'
                })
            }
            const newUser = await User.create(req.body)
            //generate token for registration
            //this is builtin function for token generation it takes 3 parameters id email which is payload
            const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: "2h" })
            // console.log(userToken)

            //to generate cookies which are used for user browser history andinfoalso import cookie parser in server.js
            res.cookie('usertoken', userToken, { httpOnly: true }).json({
                message: 'Success',
                user: newUser
            })

            // res.json({ message: 'Success', user: newUser })

        } catch (err) {
            console.log(err)
            return res.status(400).json(err)

        }
    }
    ,
    //login existing user 
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email }) //we get user by its email and compare its password 
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)//it will compare user password with db password if password matches then generate cookies and token

                if (passwordMatch) {
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: "2h" })
                    res.cookie('usertoken', userToken, { httpOnly: true }).json({
                        message: 'Success',
                        user: user
                    })

                } else {
                    res.status(400).json({
                        message: "invalid login attempt"
                    })
                }

            } else {
                res.status(400).json({
                    message: "Invalid login attempt"
                })
            }
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)

        }
    },

    //logOut an existing user
    logout: (req, res) => {
        res.clearCookie('usertoken')
        res.sendStatus(200).json({
            message: 'you logged out successfully'
        })
    }


}