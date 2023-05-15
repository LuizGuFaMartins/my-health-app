import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SimpleCard_sty';

const SimpleCard = ({vaccine, setId}) => {
  function returnData() {
    setId(vaccine.id);
  }
  return (
    <View key={vaccine.id} style={styles.simpleCard}>
      <TouchableOpacity onPress={returnData}>
        <Text style={styles.title}>{vaccine.vaccine}</Text>
        <Text style={styles.nextDate}>{vaccine.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleCard;
