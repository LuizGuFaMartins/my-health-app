import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './DrawerComponent_sty';

const DrawerComponent = props => {
  function goToMyVaccines() {
    props.navigation.navigate('Home');
  }

  function goToNextVaccines() {
    props.navigation.navigate('NextVaccine');
  }

  function signOut() {
    props.navigation.popToTop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.username}>Olá usuário</Text>
      </View>
      <View style={styles.routesList}>
        <TouchableOpacity style={styles.routeItem} onPress={goToMyVaccines}>
          <Image source={require('../../assets/images/icon-vaccine.jpg')} />
          <Text style={styles.item}>Minhas vacinas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeItem} onPress={goToNextVaccines}>
          <Image source={require('../../assets/images/calendar.png')} />
          <Text style={styles.item}>Próximas vacinas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeItem} onPress={signOut}>
          <Image source={require('../../assets/images/logout-green.png')} />
          <Text style={styles.item}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerComponent;
