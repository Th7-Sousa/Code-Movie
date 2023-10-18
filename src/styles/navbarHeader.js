import { StyleSheet } from 'react-native';
import { white, black, gray1, gray2, gray3, blue, orange } from './colorPalette';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    gap: 100,
  },
  text: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});