const loggin = require('loggin-js');
const MongoDbNotifier = require('./loggin-mongo-notifier');

/**
 * @param {loggin} loggin 
 */
function centralizer(loggin) {
    const { Notifier } = loggin;
    Notifier.register('MongoDB', MongoDbNotifier);
}

module.exports = centralizer;