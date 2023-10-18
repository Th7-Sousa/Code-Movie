import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { white, black, gray1, gray2, gray3, blue, orange } from './../../styles/colorPalette'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='search' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='watchList'
        options={{
          title: 'Watch list',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='bookmark' size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}