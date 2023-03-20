import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MyHealth</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    fontFamily: 'Averia Libre'
  },
  title: {
    fontSize: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
