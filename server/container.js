const diTools = require('lab-di/tools')();
const path = require('path');

const di = diTools.getDI();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');
di.registerModule(require('lab-config/implementations/file'), 'config-file');

diTools.registerDir(path.resolve(__dirname, '../server/services/external'));
diTools.registerDir(path.resolve(__dirname, '../server/services/internal'));
diTools.registerDir(path.resolve(__dirname, '../shared/internal'));

const config = di.get('config');
config.update('store', 'memory');
config.update('mongo', {type: 'memory', url: 'mongodb://localhost:27017/test'})

export default di;
