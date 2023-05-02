import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './SimpleCard_sty';

const SimpleCard = ({title, nextDate, onSimpleCardPress}) => {
  return (
    <View style={styles.simpleCard}>
      <TouchableOpacity onPress={() => onSimpleCardPress()}>
          <Text style={styles.title}>{title}</Text>
        <Text style={styles.nextDate}>{nextDate}</Text>
       
      </TouchableOpacity>
    </View>
  );
};

export default SimpleCard;
