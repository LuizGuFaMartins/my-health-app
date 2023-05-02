import React from 'react';
import { Button, Image, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Card from '../../components/card/Card';
import { styles } from './Home_sty';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');
  const nav = useNavigation();
   
  function goToEditPage() {
    navigation.navigate('Login', {});
  }

  function goToCreatePage() {
    navigation.navigate('Nova vacina', {});
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
        <View style={styles.cardsContainer}>
          <Card
            title={'BGC'}
            dose={'1º Dose'}
            date={'10/04/2020'}
            nextDate={'10/04/2023'}
            img={require('../../assets/images/icon-vaccine.jpg')}
            onCardPress={() => goToEditPage()}></Card>
        </View>
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
