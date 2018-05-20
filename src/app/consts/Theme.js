import {
  deepOrange500,
  cyan700,
  pinkA200,
  grey100,
  grey200,
  grey300,
  grey400,
  grey500,
  darkBlack,
  white,
  cyan500,
  fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack
  },
  appBar: {
    height: 50,
  },
});

export default theme;