import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { gray3 } from './../../styles/colorPalette'
import { useEffect } from "react";

export default function TabRoutesLayout() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/authentication', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [options]);

  return (
    <Tabs
      screenOptions={
        {
          headerShown: false,
          tabBarStyle: { backgroundColor: gray3, borderColor: gray3, paddingBottom: 8 }
        }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: 'Pesquisar',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='search' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='watchList'
        options={{
          title: 'Minha lista',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='bookmark' size={size} color={color} />
          )
        }}
      />

    </Tabs>
  )
}