const logginCentralizer = require('../src/loggin-mongo');
const loggin = require('loggin-js');

loggin.use(logginCentralizer);

let csol = loggin
    .notifier('console')
    .color(true)
    .level('debug')
    .formatter('detailed');

let mongodb = loggin
    .notifier('mongodb', { dbUrl: 'mongodb://0.0.0.0:27017/logs' })
    .color(true)
    .level('debug')
    .formatter('detailed');

mongodb.init();

let logger = loggin.logger();

logger.setNotifiers([csol, mongodb]);

// Available predefined log levels
logger.info('info', {
    user: 'Jeffrey',
    id: 101
});
logger.error('Teaching a snake to kick! :D');
logger.warning('Whats that');
logger.alert('Rice done.');
logger.debug('Wow I can log stuff');
logger.emergency('Lemons');
logger.critical('critical', { error: 'S*** something is bad!' });

logger.user('keff');

logger.notice('notice im now an other user');
logger.error('There was an <%rERROR>');