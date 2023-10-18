import { StyleSheet } from 'react-native';
import { white, black, gray1, gray2, gray3, blue, orange } from './colorPalette';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  textBold: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  textRegular: {
    color: white,
    fontSize: 18,
  },

  cardHome: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 112,
  },

});