import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Card_sty';

const Card = ({vaccine, setId}) => {
  // <Modal
  //   animationType="none"
  //   visible={true}
  //   transparent={true}
  //   onRequestClose={() => {
  //     console.log('Modal closed');
  //   }}></Modal>

  function returnData() {
    setId(vaccine.id);
  }

  vaccine.uploadUrl = require('../../assets/images/icon-vaccine.jpg');

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={returnData}>
        <View style={styles.titleDate}>
          <Text style={styles.titleDate.title}>{vaccine.vaccine}</Text>
          <Text style={styles.titleDate.dose}>{vaccine.dose}</Text>
          <Text style={styles.titleDate.date}>{vaccine.date}</Text>
        </View>
        <View style={styles.imageCardBox}>
          <Image style={styles.vaccineIcon} source={vaccine.uploadUrl} />
        </View>
        <Text style={styles.nextText}>{vaccine.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
