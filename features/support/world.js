import 'babel-polyfill';
import register from 'ignore-styles';

register(['.scss']);
const tools = require('./tools');

export default function() {
  this.World = World;
};

function World() {
  this.context = {};
  this.tools = tools;

  this.container = require('../../client/container');

  setupConfig(this.container.get('config'));
  this.store = this.container.get('Store');
}


function setupConfig(config) {
  config.update('mongo', {type: 'memory', url: 'mongodb://localhost:27017/test'})
}
