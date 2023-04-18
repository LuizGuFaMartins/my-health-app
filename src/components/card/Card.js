import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Card_sty';

const Card = ({title, dose, date, nextDate, img, onCardPress}) => {
  // <Modal
  //   animationType="none"
  //   visible={true}
  //   transparent={true}
  //   onRequestClose={() => {
  //     console.log('Modal closed');
  //   }}></Modal>

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onCardPress()}>
        <View style={styles.titleDate}>
          <Text style={styles.titleDate.title}>{title}</Text>
          <Text style={styles.titleDate.dose}>{dose}</Text>
          <Text style={styles.titleDate.date}>{date}</Text>
        </View>
        <View style={styles.imageCardBox}>
          <Image
            style={styles.vaccineIcon}
            source={img}
          />
        </View>
        <Text style={styles.nextText}>{nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
