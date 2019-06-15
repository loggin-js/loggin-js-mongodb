const logginMongo = require('../src/loggin-mongo');
const loggin = require('loggin-js');

loggin.use(logginMongo);

let mongodb = loggin
    .notifier('mongodb', { dbUrl: 'mongodb://0.0.0.0:27017/logs' })
    .color(true)
    .level('debug')
    .formatter('detailed');

async function main() {
    await mongodb.init();
    let logs = await mongodb.fetch({ 'level.name': 'ERROR' });
    console.log(logs);
}

main();