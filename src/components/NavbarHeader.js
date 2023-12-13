import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/navbarHeader'
import IconBack from './../../assets/icon-back.svg'
import { useNavigation } from 'expo-router';

export default function Navbar({ type }) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };

  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigation()


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/account/20726886', options)
      .then(response => response.json())
      .then(response => {
        setUserInfo(response)
      })
      .catch(err => console.error(err));
  }, []);

  const limitedUsername = userInfo.username ? userInfo.username.substr(0, 6) : '';


  return (
    <View style={styles.container}>
      {type === 'home' &&
        <View style={styles.cardHome} >
          <Text style={styles.textBold}>O que você quer assistir, {userInfo.name || limitedUsername} ?</Text>

        </View>
      }

      {type === 'search' &&
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null}>
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Pesquisar</Text>
        </View>
      }

      {type === 'detail' && (
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => {
            navigate.canGoBack() ? navigate.goBack() : null
          }}
          >
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Detalhes</Text>
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

