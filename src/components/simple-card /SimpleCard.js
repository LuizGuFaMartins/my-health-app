import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SimpleCard_sty';
import {useDispatch} from 'react-redux';
import {reducerSetVaccine} from '../../redux/vaccines/vaccineSlice';

const SimpleCard = ({vaccine, navigation}) => {
  const dispatch = useDispatch();

  function goToEditPage() {
    dispatch(
      reducerSetVaccine({
        id: vaccine.item.id,
        date: vaccine.item.date,
        vaccine: vaccine.item.vaccine,
        dose: vaccine.item.dose,
        uploadUrl: vaccine.item.uploadUrl,
        nextDate: vaccine.item.nextDate,
        userId: vaccine.item.userId,
      }),
    );
    navigation.push('Editar vacina');
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
