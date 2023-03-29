import React from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './Home_sty';

const Home = () => {
  const [search, onChangeSearch] = React.useState('');

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MyHealth</Text>
      </View>
    </View>
  );
};

export default Home;
