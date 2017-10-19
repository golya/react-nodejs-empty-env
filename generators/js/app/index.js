'use strict';
const util = require('util');
const path = require('path');
const Generator = require('yeoman-generator');
const _ = require('lodash');


const JS = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('type', {type: String});
    this.option('name', {type: String});
    this.option('babel');
    this.types = {
      state: this.state.bind(this),
      page: this.page.bind(this),
      components: this.components.bind(this)
    };
  }

  start() {
    if (!_.get(this.types, this.options.type)) {
      console.log(
        `Unknown type, please choose from the following types:
        ${_.keys(this.types)}`
      );
      return;
    }
    const name = this.options.name;
    let namePlural = this.options.namePlural;
    if (!namePlural) {
      namePlural = name+'s';
    }
    const context = {
      entityLower: _.lowerCase(name),
      entityUpper: _.upperCase(name),
      entityCapital: _.capitalize(name),
      entitiesLower: _.lowerCase(namePlural),
      entitiesUpper: _.upperCase(namePlural),
      entitiesCapital: _.capitalize(namePlural)
    }

    this.types[this.options.type](context);
  }

  state(context) {
    this.fs.copyTpl(
      this.templatePath('entitiesState.js'),
      this.destinationPath(`shared/internal/${context.entityLower}State/index.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('actions.js'),
      this.destinationPath(`shared/internal/${context.entityLower}State/actions.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('reducers.js'),
      this.destinationPath(`shared/internal/${context.entityLower}State/reducers.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('serviceIndex.js'),
      this.destinationPath(`shared/internal/${context.entitiesLower}/index.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('serviceHttp.js'),
      this.destinationPath(`shared/internal/${context.entitiesLower}/implementations/http.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('serviceDatabase.js'),
      this.destinationPath(`shared/internal/${context.entitiesLower}/implementations/database.js`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('entity.feature'),
      this.destinationPath(`features/${context.entitiesLower}.feature`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('bddSteps.js'),
      this.destinationPath(`features/steps/${context.entitiesLower}.js`),
      context
    );

  }

  components(context) {
    console.log(this.options.type);
  }

  page(context) {
    this.fs.copyTpl(
      this.templatePath('page.js'),
      this.destinationPath(`client/pages/${context.entitiesLower}.js`),
      context
    );
  }

};

module.exports = class extends JS {
  exec() {
    this.start();
  }
}
