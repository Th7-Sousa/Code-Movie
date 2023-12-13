import { View, ActivityIndicator, Text } from 'react-native';

export default function LoadSpinner() {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 4 }}>
        <ActivityIndicator size="large" color="#FF8700" />
        <Text style={{ color: '#FFF' }} >Carregando...</Text>
      </View>
    </View>
  );
}

