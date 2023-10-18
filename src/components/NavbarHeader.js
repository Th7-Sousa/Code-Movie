import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/navbarHeader'
import IconBack from './../assets/icon-back.svg'

export default function Navbar({ type }) {

  return (
    <View style={styles.container}>
      {type === 'home' && <Text style={styles.text}>Quer assistir o que?</Text>}

      {type === 'search' &&
        <View style={styles.card}>
          <TouchableOpacity>
            <IconBack width={120} height={40} />
          </TouchableOpacity>
          <Text style={styles.text}>Search</Text>
        </View>
      }


      {type === 'detail' && <Text style={styles.text}>Detail nav</Text>}

      {type === 'list' && <Text style={styles.text}>Whatch List</Text>}
    </View>
  )
}

//CHAMADAS
// <NavbarHeader type='home' />
// <NavbarHeader type='search' />
// <NavbarHeader type='detail' />
// <NavbarHeader type='list' />