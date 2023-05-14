import React, {useEffect} from 'react';
import {Button, Image, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../../components/card/Card';
import Vaccine from '../../models/Vaccine';
import {styles} from './Home_sty';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
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
    // if (Vaccine.list().length > 0 && Vaccine.list()) {
    return vaccineList.map(vac => <Card vaccine={vac} setId={setId}></Card>);
    // }
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
