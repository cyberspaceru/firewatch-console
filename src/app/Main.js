/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import theme from './consts/Theme';
import ConnectionToolbar from './components/ConnectionToolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar title='Firewatch Console'/>
          <ConnectionToolbar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
