'use strict';
import { browserHistory } from 'react-router';

function Component() {
  return {
    getHistory: () => browserHistory,
    push: (path) => browserHistory.push(path)
  }
}

Component.deps = [];
module.exports = Component;
