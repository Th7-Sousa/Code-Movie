import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from '../styles/navbarHeader'
import IconBack from './../../assets/icon-back.svg'
import { MaterialIcons } from '@expo/vector-icons';
import { gray1, orange } from './../styles/colorPalette'
import { Link, useNavigation } from 'expo-router';

export default function Navbar({ type }) {

  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigation()

  const handlePress = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      Alert.alert('Removido de favoritos');
    } else {
      Alert.alert('Adicionado aos favoritos');
    }
  };

  const iconColor = isClicked ? orange : gray1;

  return (
    <View style={styles.container}>
      {type === 'home' &&
        <View style={styles.cardHome} >
          <Text style={styles.textBold}>Quer assistir o que hoje?</Text>
        </View>
      }

      {type === 'search' &&
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null}>
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Search</Text>
        </View>
      }

      {type === 'detail' && (
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null} >
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Detalhes</Text>
          <TouchableOpacity>
            <MaterialIcons name='bookmark' size={28} color={iconColor} />
          </TouchableOpacity>
        </View>
      )}

      {type === 'list' &&
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null}>
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Minha lista</Text>
        </View>
      }

    </View>
  )
}


//CHAMADAS
// <NavbarHeader type='home' />
// <NavbarHeader type='search' />
// <NavbarHeader type='detail' />
// <NavbarHeader type='list' />