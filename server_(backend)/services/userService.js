const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const secret = 'q-90234xcwmietvuselrg';

const tokenBlacklist = new Set();

async function register(name, username, email, img, country, password, items) {
    const existing = await User.findOne({ email })//.collation({ locale: 'simple', strength: 1 });
    if (existing) {
        throw new Error('Email is taken');
    }

    const user = await User.create({
        name,
        username,
        email,
        img,
        country,
        items,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user);
}

async function login(email, password) {
    const user = await User.findOne({ email })//.collation({ locale: 'simple', strength: 1 });
    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createToken(user);
}

async function logout(token) {
    tokenBlacklist.add(token);
}

function createToken(user) {
    const payload = {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        img: user.img,
        country: user.country,
        items: user.items,
    };

    return {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        img: user.img,
        country: user.country,
        items: user.items,
        accessToken: jwt.sign(payload, secret)
    };
}

function parseToken(token) {
    if (tokenBlacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }

    return jwt.verify(token, secret);
}

module.exports = {
    register,
    login,
    logout,
    parseToken
};