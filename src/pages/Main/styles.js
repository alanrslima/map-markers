import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  placesContainer: {
    width: '100%',
    maxHeight: 200,
    marginBottom: 20,
    paddingVertical: 20,
  },
  place: {
    width: metrics.SCREEN_WIDTH - 40,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginHorizontal: 20,
    padding: 16
  }
})