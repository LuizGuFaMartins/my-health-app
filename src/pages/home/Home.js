import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {styles} from './Home_sty';

const Home = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');

  function goToEditPage() {
    navigation.navigate('Login', {});
  }

  function goToCreatePage(){
    navigation.navigate('CreateVaccine', {})
  }

  return (
    <ScrollView style={styles.container}>
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
        <TouchableOpacity onPress={goToEditPage} style={styles.card}>
          <View style={styles.titleDate}>
            <Text style={styles.titleDate.title}>BCG</Text>
            <Text style={styles.titleDate.dose}>Dose única</Text>
            <Text style={styles.titleDate.date}>11/06/2022</Text>
          </View>
          <View style={styles.imageCardBox}></View>
          <Text style={styles.nextText}>Não há próxima dose</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToEditPage} style={styles.card}>
          <View style={styles.titleDate}>
            <Text style={styles.titleDate.title}>BCG</Text>
            <Text style={styles.titleDate.dose}>Dose única</Text>
            <Text style={styles.titleDate.date}>11/06/2022</Text>
          </View>
          <View style={styles.imageCardBox}></View>
          <Text style={styles.nextText}>Não há próxima dose</Text>
        </TouchableOpacity>
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
    </ScrollView>
  );
};

export default Home;
