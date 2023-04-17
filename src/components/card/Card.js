import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Card_sty';

const Card = props => {
  // <Modal
  //   animationType="none"
  //   visible={true}
  //   transparent={true}
  //   onRequestClose={() => {
  //     console.log('Modal closed');
  //   }}></Modal>

  return (
    <TouchableOpacity onPress={goToEditPage} style={styles.card}>
      <View style={styles.titleDate}>
        <Text style={styles.titleDate.title}>BCG</Text>
        <Text style={styles.titleDate.dose}>Dose única</Text>
        <Text style={styles.titleDate.date}>11/06/2022</Text>
      </View>
      <View style={styles.imageCardBox}>
        <Image
          style={styles.vaccineIcon}
          source={require('../../assets/images/icon-vaccine.jpg')}
        />
      </View>
      <Text style={styles.nextText}>Não há próxima dose</Text>
    </TouchableOpacity>
  );
};

export default Card;
