import { StyleSheet } from 'react-native';
import { white, black, gray1, gray2, gray3, blue, orange } from './colorPalette';


export const styles = StyleSheet.create({

  content: {
    width: 170,
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 16,
    borderRadius: 4,
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 4,
  },

  title: {
    color: white,
    textAlign: 'left',
    fontSize: 12,
    opacity: 0.8,
  },

  smallContent: {
    width: 122,
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 8,
    borderRadius: 4,
  },

  smallImage: {
    width: '100%',
    height: 160,
    borderRadius: 4,
  }

});