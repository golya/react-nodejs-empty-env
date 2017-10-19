import _ from 'lodash';

function MemoryStore(mongo) {
  const models = {};

  async function init () {
    const db = await mongo.getConnection();
  }

  function get(name) {
    return _.get(models, name);
  }

  function initModel(db, name, schema, options) {
    schema = schema || {};
    options = options || {strict: false};
    if (!_.get(models, name)) {
      _.set(models, name, db.model(name, db.Schema(schema, options)));
    }
  }

  return Object.freeze({
    init,
    get: get
  });
}

MemoryStore.deps = ['mongo'];
module.exports = MemoryStore;
