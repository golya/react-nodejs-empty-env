'use strict';

const di = require('lab-di')();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

// PAGES
const main = require('./pages/main');
const root = require('./pages/root');
di.registerModule(main, 'Main');
di.registerModule(root, 'Root');

const header = require('./components/header/header');
di.registerModule(header, 'Header');

const config = di.get('config');
config.update('store', 'memory');
config.update('baseUrl', '');

module.exports = di;
