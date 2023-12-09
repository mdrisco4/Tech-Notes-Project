const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
    //actions
})

// @desc Refresh
// @route GET /auth/refresh
// @access Public - when access token expires
const refresh = (req, res) => {

}

// @desc Logout
// @route POST /auth/logout
// @access Public