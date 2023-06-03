import {useIsFocused} from '@react-navigation/native';
import {collection, onSnapshot, query} from 'firebase/firestore';
import React, {useEffect} from 'react';
import {Button, Image, View} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../../components/card/Card';
import {db} from '../../firebase/config';
import Vaccine from '../../models/Vaccine';
import {styles} from './Home_sty';

const Home = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');
  const [id, setId] = React.useState(0);
  const [vaccineList, setVaccineList] = React.useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    // vaccines = Vaccine.list();

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

  useEffect(() => {
    if (id !== 0) goToEditPage();
  }, [id]);

  useEffect(() => {
    if (search) {
      const filteredVaccines = vaccineList.filter(vac =>
        vac.vaccine.toUpperCase().includes(search.toUpperCase()),
      );
      setVaccineList(filteredVaccines);
    } else {
      setVaccineList(Vaccine.list());
    }
  }, [search]);

  function loadCards() {
    return vaccineList.map(vac => <Card vaccine={vac} setId={setId}></Card>);
  }

  function goToEditPage() {
    navigation.push('Editar vacina', {id: id});
  }

  function goToCreatePage() {
    navigation.push('Nova vacina', {});
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <View style={styles.inputBox}>
          <View style={styles.searchIconBox}>
            <Image
              style={styles.searchIcon}
              source={require('../../assets/images/search-icon.jpg')}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
            placeholder="PESQUISAR VACINA..."
            placeholderTextColor="#8B8B8B"
          />
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={vaccineList}
          renderItem={vac => (
            <Card vaccine={vac} navigation={navigation}></Card>
          )}
          keyExtractor={vac => vac.id}
          numColumns={2}></FlatList>
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

export default Home;
