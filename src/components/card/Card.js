import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './Card_sty';

const Card = ({vaccine, setId}) => {
  function returnData() {
    setId(vaccine.id);
  }

  vaccine.uploadUrl = require('../../assets/images/doc.jpg');

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={returnData}>
        <View style={styles.titleDate}>
          <Text style={styles.titleDate.title}>{vaccine.vaccine}</Text>
          <Text style={styles.titleDate.dose}>{vaccine.dose}</Text>
          <Text style={styles.titleDate.date}>{vaccine.date}</Text>
        </View>
        <View style={styles.imageCardBox}>
          <Image style={styles.image} source={vaccine.uploadUrl} />
        </View>
        <Text style={styles.nextText}>{vaccine.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
