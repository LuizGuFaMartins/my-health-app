import {useIsFocused} from '@react-navigation/native';
import {collection, onSnapshot, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Card from '../../components/card/Card';
import {db} from '../../firebase/config';
import {styles} from './Home_sty';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [search, onChangeSearch] = React.useState('');
  const [vaccineList, setVaccineList] = React.useState([]);
  const [filteredVaccineList, setFilteredVaccineList] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    setVaccineList([]);
    setFilteredVaccineList([]);
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

        setFilteredVaccineList(vaccinesList);
        setVaccineList(vaccinesList);
        setLoading(false);
      });
    } else {
      setLoading(true);
    }
  }, [isFocused, user]);

  useEffect(() => {
    if (search !== '') {
      const filteredVaccines = vaccineList.filter(vac =>
        vac.vaccine.toUpperCase().includes(search.toUpperCase()),
      );
      setFilteredVaccineList(filteredVaccines);
    } else {
      setFilteredVaccineList(vaccineList);
    }
  }, [search]);

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
      {filteredVaccineList.length === 0 && !loading && (
        <View style={styles.noVaccines}>
          <Text style={styles.loading.title}>Nenhuma vacina cadastrada.</Text>
        </View>
      )}
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.loading.title}>Carregando vacinas...</Text>
        </View>
      ) : (
        <View style={styles.cardsContainer}>
          <FlatList
            data={filteredVaccineList}
            renderItem={vac => (
              <Card vaccine={vac} navigation={navigation}></Card>
            )}
            keyExtractor={vac => vac.id}
            numColumns={2}></FlatList>
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

export default Home;
