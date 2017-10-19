'use strict';

import React from 'react';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {darkBlack, indigo700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './scss/main.scss'
import './scss/text.scss'
import './scss/view.scss'
import './scss/boxes.scss'

injectTapEventPlugin();

function App(container) {
  const Store = container.get('Store');
  const Router = container.get('Router');

  const muiTheme = getMuiTheme({
    palette: {
      textColor: darkBlack,
      primary1Color: darkBlack,
      primary2Color: indigo700,
      accent1Color: darkBlack,
      pickerHeaderColor: darkBlack,
      alternateTextColor: darkBlack
    },
    appBar: {
      height: 60,
    },
  });

  return (
    <Provider store={Store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        {Router}
      </MuiThemeProvider>
    </Provider>
  )
}

App.type = 'factory';
module.exports = App;
