import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
//import { styles } from '../../../styles/styles_global';
//import LoadSpinner from '../../../components/LoadSpinner';

export default function SearchPage() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href='/watchList'>
        Link para Meus filmes favoritos
      </Link>
    </View>
  );
}
