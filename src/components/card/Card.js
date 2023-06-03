import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Card_sty';

const Card = ({vaccine, navigation}) => {
  function goToEditPage() {
    navigation.push('Editar vacina', {id: vaccine.item.id});
  }
  
  vaccine.item.uploadUrl = require('../../assets/images/doc.jpg');

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={goToEditPage}>
        <View style={styles.titleDate}>
          <Text style={styles.titleDate.title}>{vaccine.item.vaccine}</Text>
          <Text style={styles.titleDate.dose}>{vaccine.item.dose}</Text>
          <Text style={styles.titleDate.date}>{vaccine.item.date}</Text>
        </View>
        <View style={styles.imageCardBox}>
          <Image style={styles.image} source={vaccine.item.uploadUrl} />
        </View>
        <Text style={styles.nextText}>{vaccine.item.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
