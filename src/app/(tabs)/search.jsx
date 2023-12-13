import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { styles } from './../../styles/styles_global'
import NavbarHeader from './../../components/NavbarHeader'
import CardMovie from "../../components/CardMovie";
import { useEffect, useState } from 'react';
import { gray1, orange, blue, gray2 } from './../../styles/colorPalette'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function Search() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU0MzQ3ZDZlYzY5ZWJiMDVlZTJhYzg2Nzk0NzliNSIsInN1YiI6IjY1NWJmY2JhMDgxNmM3MDBlMDFjNmJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I_sYbHjAaPfz8Hcm_rpSOCdOh7VLkOUKulTWh8fHHeE'
    }
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [searchTerm]);


  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='search' />
      </View>

      <ScrollView style={{ display: 'flex', maxHeight: 'max-content', gap: 20 }}
        showsVerticalScrollIndicator={false}>

        <TextInput
          style={
            { width: 370, paddingVertical: 8, paddingHorizontal: 12, color: '#fff', backgroundColor: gray2, borderRadius: 56 }
          }
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder='Pesquisar filmes...'
          placeholderTextColor="#fff"
        />

        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24, paddingTop: 32, paddingLeft: 8 }}>

          {isLoading ? (
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 16 }} >Carregando...</Text>
          ) : searchResults && searchResults.length > 0 ? (
            searchResults.map((movie) => (
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
            <View style={{ width: '100%', paddingTop: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              {searchTerm && <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Nenhum filme encontrado :(</Text>}
            </View>
          )}

        </View>

      </ScrollView>

    </View >
  );
}