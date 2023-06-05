import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Card_sty';
import {useDispatch} from 'react-redux';
import {reducerSetVaccine} from '../../redux/vaccines/vaccineSlice';

const Card = ({vaccine, navigation}) => {
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
    navigation.push('Editar vacina', {vaccine: vaccine.item});
  }

  console.log('\n\n url: ', vaccine.item.uploadUrl);

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={goToEditPage}>
        <View style={styles.titleDate}>
          <Text style={styles.titleDate.title}>{vaccine.item.vaccine}</Text>
          <Text style={styles.titleDate.dose}>{vaccine.item.dose}</Text>
          <Text style={styles.titleDate.date}>{vaccine.item.date}</Text>
        </View>
        <View style={styles.imageCardBox}>
          <Image style={styles.image} source={{uri: vaccine.item.uploadUrl}} />
        </View>
        <Text style={styles.nextText}>{vaccine.item.nextDate}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
