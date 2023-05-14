import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleCard from '../../components/simple-card /SimpleCard';
import Vaccine from '../../models/Vaccine';
import {styles} from './NextVaccine_sty';
import { useFocusEffect } from '@react-navigation/native';

const NextVaccine = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');
  const [id, setId] = React.useState(0);
  const [vaccineList, setVaccineList] = React.useState([]);

  useEffect(() => {
    if (id !== 0) goToEditPage();
  }, [id]);

  useFocusEffect(
    React.useCallback(() => {
      let mounted = true;

      async function fetchData() {
        try {
          let vaccines = Vaccine.list();
          if (mounted) {
            setVaccineList(vaccines);
          }
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();

      return () => {
        mounted = false;
      };
    }, []),
  );

  function loadCards() {
    return vaccineList.map(vac => (
      <SimpleCard vaccine={vac} setId={setId}></SimpleCard>
    ));
  }

  function goToEditPage() {
    navigation.push('Editar vacina', {id: id});
  }

  function goToCreatePage() {
    navigation.navigate('Nova vacina', {});
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardsContainer}>{loadCards()}</View>
      </ScrollView>
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
