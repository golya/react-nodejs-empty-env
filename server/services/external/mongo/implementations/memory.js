'use strict';

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

function Memory(config) {
  return mockgoose.prepareStorage().then(
    () => mongoose.connect(config.get('mongo').url).then(() => mongoose)
  );
}

Memory.deps = ['config'];
module.exports = Memory;
