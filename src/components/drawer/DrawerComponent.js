import React from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './DrawerComponent_sty';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Modal} from 'react-native-paper';

const DrawerComponent = props => {
  // <Modal
  //   animationType="none"
  //   visible={true}
  //   transparent={true}
  //   onRequestClose={() => {
  //     console.log('Modal closed');
  //   }}></Modal>
  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.username}>Olá usuário</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerComponent;
