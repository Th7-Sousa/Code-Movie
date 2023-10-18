import { View, Text } from "react-native";
import { styles } from '../styles/styles_global';
import NavbarHeader from '../components/NavbarHeader'

export default function Detail() {
  return (
    <View style={styles.container} >
      <NavbarHeader type='detail' />
    </View>
  );
}