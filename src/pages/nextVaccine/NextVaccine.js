import {useIsFocused} from '@react-navigation/native';
import {collection, onSnapshot, query} from 'firebase/firestore';
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SimpleCard from '../../components/simple-card /SimpleCard';
import {db} from '../../firebase/config';

import {styles} from './NextVaccine_sty';

const NextVaccine = ({navigation}) => {
  const [vaccineList, setVaccineList] = React.useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const q = query(collection(db, 'vaccines'));

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
    });
  }, [isFocused]);

  function goToCreatePage() {
    navigation.navigate('Nova vacina', {});
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={vaccineList}
          renderItem={vac => (
            <SimpleCard vaccine={vac} navigation={navigation}></SimpleCard>
          )}
          keyExtractor={vac => vac.id}
          numColumns={1}></FlatList>
      </View>

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
