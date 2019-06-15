
/**
* @jest-environment node
*/

const logginMongo = require('../src/loggin-mongo');
const loggin = require('loggin-js');

describe('logginMongo should', () => {
    it(`be defined`, () => {
        expect(logginMongo).toBeDefined();
    });

    it(`not throw when adding to loggin-js`, () => {
        expect(() => {
            loggin.use(logginMongo);
        }).not.toThrow();
    });

    it(`logginMongo should be accesible after adding it`, () => {
        loggin.use(logginMongo);
        expect(loggin.notifier('mongodb', { dbUrl: 'mongodb://...' })).toBeDefined();
        expect(loggin.Notifier.MongoDB).toBeDefined();
    });
});