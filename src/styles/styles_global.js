import { StyleSheet } from 'react-native';
import { white, black, gray1, gray2, gray3, blue, orange } from './colorPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 40,
  },

  text: {
    color: white,
  },

  scrollContainer: {
    display: 'flex',
    gap: 40,
  },



});
