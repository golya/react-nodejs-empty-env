'use strict';

import React from 'react';
import { connect } from 'react-redux'

function Component() {
  class Root extends React.Component {
    state = {
    }
    render() {
      return (
        <div>Hello</div>
      );
    }
  }

  return connect()(Root);
}

Component.deps = [];
module.exports = Component;
