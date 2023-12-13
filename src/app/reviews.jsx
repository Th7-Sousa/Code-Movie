import { View, Text } from "react-native";
import { styles } from '../styles/styles_global';
import NavbarHeader from '../components/NavbarHeader'
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { gray1, orange, blue } from './../styles/colorPalette'
import { MaterialIcons } from '@expo/vector-icons';
import { optionsGet } from "./utils/optionsGet";
import { ScrollView } from "react-native-gesture-handler";

export default function Detail() {

  const { id } = useLocalSearchParams()

  const [movieDetail, setMovieDetail] = useState(null)
  const [movieReview, setMovieReview] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, optionsGet)
      .then(response => response.json())
      .then(response => setMovieDetail(response))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, optionsGet)
      .then(response => response.json())
      .then(response => {
        setMovieReview(response.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='detail' />
        <MaterialIcons onPress={() => handlePress()} name='bookmark' size={28} color={gray1} />
      </View>

      {movieDetail &&
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Comentários do filme {movieDetail.title}</Text>
      }

      <ScrollView style={{ display: 'flex', maxHeight: 'max-content', gap: 20 }}
        showsVerticalScrollIndicator={false}>

        {isLoading ? (
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 16 }} >Carregando comentários...</Text>
        ) : Array.isArray(movieReview) && movieReview.length > 0 ? (
          movieReview.map((review) => (
            <View key={review.id} style={{ width: '100%', paddingHorizontal: 20, display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 24 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text style={{ color: blue, fontSize: 16 }} >{review.author}</Text>
                <MaterialIcons style={{ marginRight: -12 }} name='star' size={20} color={orange} />
                <Text style={{ color: orange, fontSize: 16 }}>{review.author_details.rating ? review.author_details.rating : 'Sem avaliação'}</Text>
              </View>

              <View>
                <Text ellipsizeMode='tail' numberOfLines={8} style={{ color: '#fff', fontSize: 11 }} >{review.content}</Text>
              </View>

            </View>
          ))
        ) : (
          <Text style={{ color: orange, fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>Não há comentários para esse filme!</Text>
        )}

      </ScrollView>

    </View >
  );
}
