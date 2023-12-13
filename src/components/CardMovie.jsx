import { View, Image, Text } from 'react-native';
import { styles } from './../styles/cardMovie'

export default function CardMovie({ pathImage, title, size, ...props }) {

  const CardSize = {
    content: size == 'small' ? styles.smallContent : styles.content,
    image: size == 'small' ? styles.smallImage : styles.image
  }

  return (
    <View style={CardSize.content}  {...props} >
      <Image
        style={CardSize.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${pathImage}`
        }}
      />
      <Text numberOfLines={1} style={styles.title} >{title}</Text>
    </View>
  )
}
