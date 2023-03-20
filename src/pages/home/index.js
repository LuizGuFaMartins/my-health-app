import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MyHealth</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  title: {
    height: 50,
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
