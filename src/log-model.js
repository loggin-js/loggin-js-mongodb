const mongoose = require('mongoose');
const loggin = require('loggin-js');

const log = new mongoose.Schema({
    message: String,
    data: { any: {} },
    level: {
        level: Number,
        name: String,
        fileLogginLevel: String,
    },
    channel: String,
    levelStr: String,
    time: mongoose.Mixed,
    user: String,
}, { timestamps: true });

module.exports = mongoose.model('Log', log);;