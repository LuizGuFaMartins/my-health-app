import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SimpleCard_sty';

const SimpleCard = ({vaccine, navigation}) => {
  function goToEditPage() {
    navigation.push('Editar vacina', {id: vaccine.item.id});
  }
  return (
    <View key={vaccine.item.id} style={styles.simpleCard}>
      <TouchableOpacity onPress={goToEditPage}>
        <Text style={styles.title}>{vaccine.item.vaccine}</Text>
        <Text style={styles.nextDate}>{vaccine.item.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleCard;
