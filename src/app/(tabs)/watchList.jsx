import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { Link } from 'expo-router';
import { styles } from './../../styles/styles_global'
import NavbarHeader from './../../components/NavbarHeader'
import CardMovie from "../../components/CardMovie";
import { useEffect, useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import IconBox from './../../../assets/icon-box.svg'
import { optionsGet } from "../utils/optionsGet";

export default function Lista() {



  const [movieInfo, setMovieInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/account/20726886/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, optionsGet)
      .then(response => response.json())
      .then(response => {
        setMovieInfo(response.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='list' />

      </View>

      <ScrollView style={{ width: '100%', display: 'flex', maxHeight: 'max-content', gap: 20 }}
        showsVerticalScrollIndicator={false}>

        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24 }}>

          {isLoading ? (
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 16 }} >Carregando lista...</Text>
          ) : movieInfo && movieInfo.length > 0 ? (
            movieInfo.map((movie) => (
              <Link
                key={movie.id}
                href={{
                  pathname: "/detail",
                  params: { id: movie.id },
                }}
              >
                <CardMovie pathImage={movie.poster_path} title={movie.title} />
              </Link>
            ))
          ) : (
            <View style={{ paddingTop: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <IconBox width={80} height={80} />
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Lista vazia!</Text>
            </View>
          )}

        </View>

      </ScrollView>

    </View >
  );
}
