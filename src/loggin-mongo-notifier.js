const loggin = require('loggin-js');
const mongoose = require('mongoose');
const Log = require('./log-model');

mongoose.Promise = Promise;

class MongoDbNotifier extends loggin.Notifier {
    constructor(options) {
        super(options);
        if (!options.dbUrl) {
            throw new Error('mongodb notifier required a dbUrl to be passed in options');
        }
        this.name = 'mongodb';
    }

    init() {
        return mongoose.connect(this.options.dbUrl, { useNewUrlParser: true });
    }

    fetch(conditions = {}) {
        return Log.find(conditions);
    }

    sendLog(log) {
        return Log.create(log);
    }

    async notify(log) {
        await this.sendLog(log);
        return this;
    }
}

module.exports = MongoDbNotifier;
