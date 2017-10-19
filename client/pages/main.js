'use strict';

import React from 'react';
import { connect } from 'react-redux'

function Component(Header) {
  class Main extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <main>
            {this.props.children}
          </main>
        </div>
      );
    }
  }

  return connect()(Main);
}

Component.deps = ['Header'];
module.exports = Component;
