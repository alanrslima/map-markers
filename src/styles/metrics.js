import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  SCREEN_WIDTH: width < height ? width : height,
  SCREEN_HEIGHT: width < height ? height : width,
  STATUSBAR_HEIGHT: StatusBar.currentHeight,
  HEADER_HEIGHT: 50,
};

export default metrics;