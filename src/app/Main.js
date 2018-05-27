import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './consts/Theme';
import ConnectionToolbar from './components/ConnectionToolbar';
import BottomToolbar from './components/BottomToolbar';
import Network from './components/network/Network';
import Rules from './components/rules/Rules';
import mainStyle from './../css/main-css';
import Language from 'material-ui/svg-icons/action/language';
import Whatshot from 'material-ui/svg-icons/social/whatshot';

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar title='Firewatch Console' />
          <ConnectionToolbar />
          <div>
            <Tabs>
              <Tab label="Network"
                icon={<Language />}>
                <Network />
              </Tab>
              <Tab label="Rules"
                icon={<Whatshot />} >
                <Rules />
              </Tab>
            </Tabs>
          </div>
          <BottomToolbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
