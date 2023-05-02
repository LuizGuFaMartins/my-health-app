import React from 'react';
import { Button, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SimpleCard from '../../components/simple-card /SimpleCard';
import { styles } from './NextVaccine_sty';

const NextVaccine = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');

  function goToEditPage() {
    navigation.navigate('Login', {});
  }

  function goToCreatePage() {
    navigation.navigate('Nova vacina', {});
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardsContainer}>
          <SimpleCard
            title={'BGC'}
            nextDate={'10/04/2023'}
            onCardPress={() => goToEditPage()}></SimpleCard>
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

export default NextVaccine;
