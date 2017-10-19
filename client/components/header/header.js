'use strict';

import React from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import {grey200} from 'material-ui/styles/colors';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

import './header.scss';

function Component(History) {
  const changePath = (path) => {
    History.push(`/${path}`);
  }
  const Logged = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MenuIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      onChange={(_, value) => changePath(value)}
    >
    </IconMenu>
  );

  class Header extends React.Component {
    getLogo = () =>{
      return (
        <span className="logo-container">
          logo
        </span>
      );
    }
    style = {
      backgroundColor: grey200
    }

    render() {
      return (
        <AppBar
          title={this.getLogo()}
          style={this.style}
          iconElementLeft={<Logged />}
        />
      );
    }
  }
  return connect()(Header);
}

Component.deps = ['History'];
module.exports = Component;

