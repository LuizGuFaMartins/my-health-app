import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <ImageBackground
      source={require('../../assets/initial-background.jpeg')}
      resizeMode="cover"
      style={styles.container}>
      <LinearGradient
        colors={['#949d98', '#FFFFFF', '#DDE6E5', '#949d98']}
        style={styles.gradient}></LinearGradient>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.vaccineIcon}
            source={require('../../assets/icon-vaccine.jpg')}
          />
          <Text style={styles.title}>MyHealth</Text>
        </View>
        <View>
          <Text style={styles.titlePar}>
            Controle as suas vacinas e fique seguro
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Digeite seu e-mail"
              placeholderTextColor="#419ED7"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Digeite sua senha"
              placeholderTextColor="#419ED7"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              // onPress={onPressLearnMore}
              title="Entrar"
              color="#37BD6D"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              // onPress={onPressLearnMore}
              title="Criar minha conta  "
              color="#419ED7"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              // onPress={onPressLearnMore}
              title="Esqueci minha senha"
              color="#B0CCDE"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
  },
  gradient: {
    opacity: 0.8,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    height: '100%',
    padding: 10,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    fontFamily: 'Averia Libre',
    flexDirection: 'row',
  },
  vaccineIcon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 54,
    color: '#419ED7',
    textDecorationLine: 'underline',
  },
  titlePar: {
    fontSize: 38,
    color: '#419ED7',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  inputBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  label: {
    width: '16%',
    fontSize: 18,
    paddingRight: 10,
  },
  input: {
    width: '84%',
    height: 51,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonBox: {
    width: '70%',
    fontSize: 18,
    marginVertical: 20,

  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'red',
  },
});

export default Login;
