import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SimpleCard_sty';
import {useDispatch} from 'react-redux';

const SimpleCard = ({vaccine, navigation}) => {
  const dispatch = useDispatch();

  function goToEditPage() {
    dispatch(
      reducerSetVaccine({
        id: vaccine.id,
        date: vaccine.date,
        vaccine: vaccine.vaccine,
        dose: vaccine.dose,
        uploadUrl: vaccine.uploadUrl,
        nextDate: vaccine.nextDate,
        userId: vaccine.userId,
      }),
    );
    navigation.push('Editar vacina', {vaccine: vaccine.item});
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
