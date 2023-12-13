import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { styles } from '../styles/styles_global';
import NavbarHeader from '../components/NavbarHeader'
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { gray1, orange, blue } from './../styles/colorPalette'
import { MaterialIcons } from '@expo/vector-icons';
import { optionsGet } from "./utils/optionsGet";

import { WebView } from 'react-native-webview';

export default function Detail() {

  const { id } = useLocalSearchParams()

  const [isFavorite, setIsFavorite] = useState(false)

  const optionsFavorite = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU0MzQ3ZDZlYzY5ZWJiMDVlZTJhYzg2Nzk0NzliNSIsInN1YiI6IjY1NWJmY2JhMDgxNmM3MDBlMDFjNmJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I_sYbHjAaPfz8Hcm_rpSOCdOh7VLkOUKulTWh8fHHeE'
    },
    body: JSON.stringify({ media_type: 'movie', media_id: id, favorite: isFavorite })
  };

  const [isClicked, setIsClicked] = useState(false);

  const [movieInfo, setMovieInfo] = useState(null)
  const [movieDetail, setMovieDetail] = useState(null)
  const [videoKey, setVideoKey] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/account/20726886/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, optionsGet)
      .then(response => response.json())
      .then(response => {
        setMovieInfo(response.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, optionsGet)
      .then(response => response.json())
      .then(response => setMovieDetail(response))
      .catch(err => console.error(err));
  }, [id]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, optionsGet)
      .then(response => response.json())
      .then(response => {
        setVideoKey(response.results[1].key);
      })
      .catch(err => console.error(err));
  }, [id]);

  //const iconColor = isClicked ? orange : gray1;

  const handlePress = () => {
    setIsFavorite(prevState => {
      const newState = !prevState;
      setIsClicked(true);
      if (newState === true) {
        Alert.alert('Adicionado aos favoritos');
      } else if (newState === false) {
        Alert.alert('Removido dos favoritos');
      }

      fetch('https://api.themoviedb.org/3/account/20726886/favorite', {
        ...optionsFavorite,
        body: JSON.stringify({ media_type: 'movie', media_id: id, favorite: newState })
      })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      return newState;
    });
  };


  function getYearFromDate(dateString) {
    let releaseDate = new Date(dateString);
    return releaseDate.getFullYear();
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='detail' />

        {movieDetail && movieInfo && movieInfo.some(movie => movie.id === movieDetail.id) ?
          <MaterialIcons onPress={() => handlePress()} name='bookmark' size={28} color={orange} />
          :
          <MaterialIcons onPress={() => handlePress()} name='bookmark' size={28} color={gray1} />
        }
      </View>

      {movieDetail &&
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 16 }}>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

            <Image
              style={{ width: 160, height: 260, borderRadius: 4, }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
              }}
            />

            <Text style={{ maxWidth: 160, color: '#fff', fontWeight: 'bold', fontSize: 20 }} >{movieDetail.title}</Text>

            <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 12 }}>
              <Link
                href={{
                  pathname: "/reviews",
                  params: { id: id },
                }}
                style={{ color: blue, fontSize: 14 }} >Ver comentários
              </Link>
              <MaterialIcons name='arrow-right-alt' size={24} color={blue} />
            </View>

          </View>

          <View style={{ maxWidth: 195, maxHeight: 260 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text ellipsizeMode='tail' numberOfLines={12} style={{ color: '#fff', fontSize: 11 }}>{movieDetail.overview}</Text>
              <MaterialIcons style={{ marginTop: -8, marginLeft: -6 }} name='minimize' size={28} color={gray1} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Ano: </Text>
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{getYearFromDate(movieDetail.release_date)}</Text>

            </View>

            <MaterialIcons style={{ marginTop: -12, marginLeft: -6 }} name='minimize' size={28} color={gray1} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 4, marginLeft: -2, paddingTop: 4 }}>
              <MaterialIcons name='star' size={24} color={orange} />
              <Text style={{ color: orange, fontWeight: 'bold', fontSize: 14 }} >{movieDetail.vote_average.toFixed(1)}</Text>
            </View>
          </View>


        </View>
      }

      {
        videoKey && (
          <View>
            <TouchableOpacity
              onPress={() => setShowVideo(true)}
              style={{
                backgroundColor: '#ED7E02',
                paddingHorizontal: 70,
                paddingVertical: 10,
                borderRadius: 40,
                alignItems: 'center',
                display: showVideo ? 'none' : 'flex',
              }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Assistir ao filme</Text>
                <MaterialIcons name='play-arrow' size={28} color='#fff' />
              </View>
            </TouchableOpacity>
            {showVideo && (
              <WebView
                source={{ uri: `https://www.youtube.com/embed/${videoKey}?fs=1&playsinline=0` }}
                style={{ marginTop: 20, width: 380, maxHeight: 256 }}
                allowsFullscreenVideo={true}
              />

            )}
          </View>
        )
      }
    </View >
  );
}
