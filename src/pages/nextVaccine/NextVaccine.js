import {useIsFocused} from '@react-navigation/native';
import {collection, onSnapshot, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SimpleCard from '../../components/simple-card /SimpleCard';
import {db} from '../../firebase/config';

import {styles} from './NextVaccine_sty';
import {useSelector} from 'react-redux';

const NextVaccine = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [vaccineList, setVaccineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (user.userId) {
      const q = query(
        collection(db, 'vaccines'),
        where('userId', '==', user.userId),
      );

      onSnapshot(q, snapshot => {
        const vaccinesList = [];

        snapshot.forEach(vac => {
          vaccinesList.push({
            id: vac.id,
            date: vac.data().date,
            vaccine: vac.data().vaccine,
            dose: vac.data().dose,
            uploadUrl: vac.data().uploadUrl,
            nextDate: vac.data().nextDate,
            userId: vac.data().userId,
          });
        });

        setVaccineList(vaccinesList);
        setLoading(false);
      });
    } else {
      setLoading(true);
    }
  }, [isFocused]);

  function goToCreatePage() {
    navigation.navigate('Nova vacina', {});
  }

  return (
    <View style={styles.container}>
      {loading || vaccineList.length === 0 ? (
        <View style={styles.loading}>
          <Text style={styles.loading.title}>Carregando vacinas...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={vaccineList}
            renderItem={vac => (
              <SimpleCard vaccine={vac} navigation={navigation}></SimpleCard>
            )}
            keyExtractor={vac => vac.id}
            numColumns={1}></FlatList>
        </View>
      )}

      <View style={styles.footerButton}>
        <View style={styles.buttonBox}>
          <Button
            onPress={goToCreatePage}
            title="Nova vacina"
            color="#37BD6D"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default NextVaccine;
