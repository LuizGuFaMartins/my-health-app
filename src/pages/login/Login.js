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
import { styles } from './Login_sty';

const Login = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const [emailError, onChangeEmailError] = React.useState('');
  const [passwordError, onChangePasswordError] = React.useState('');

  function signIn() {
    if(validateFields()){
      console.log("valido")
      navigation.navigate('Home', {name: 'Luiz'})
    }
  }

  function createAccount() {
    navigation.navigate('CreateAccount', {name: 'Luiz'});
  }

  function forgotPassword() {}

  function validateFields() {
    onChangeEmailError('');
    onChangePasswordError('');
    let isValid = true;
    const emailRegex =
      /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/g;

    if (!email.match(emailRegex)) {
      onChangeEmailError('E-mail inválido');
      error = false;
    }

    if (!password) {
      onChangePasswordError('Senha inválida');
      error = false;
    }

    return isValid;
  }

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
            {emailError.length > 0 && (
              <Text style={styles.error}>{emailError}</Text>
            )}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Digeite sua senha"
              placeholderTextColor="#419ED7"
              secureTextEntry={true}
            />
            {passwordError.length > 0 != null && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              onPress={signIn}
              title="Entrar"
              color="#37BD6D"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              onPress={createAccount}
              title="Criar minha conta  "
              color="#419ED7"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              onPress={forgotPassword}
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

export default Login;
