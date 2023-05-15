import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Image, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../../components/card/Card';
import Vaccine from '../../models/Vaccine';
import {styles} from './Home_sty';

const Home = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');
  const [id, setId] = React.useState(0);
  const [vaccineList, setVaccineList] = React.useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    vaccines = Vaccine.list();
    setVaccineList(vaccines);
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

export default Home;
