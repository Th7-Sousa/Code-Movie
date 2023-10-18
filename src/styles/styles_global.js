import { StyleSheet } from 'react-native';
import { white, black, gray1, gray2, gray3, blue, orange } from './colorPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 50,
  },
  text: {
    color: white,
  }
});
