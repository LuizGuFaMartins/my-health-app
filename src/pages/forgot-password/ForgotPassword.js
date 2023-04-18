import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './ForgotPassword_sty';

const ForgotPassword = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const [emailError, onChangeEmailError] = React.useState('');
  const [passwordError, onChangePasswordError] = React.useState('');

  function createAccount() {
    navigation.navigate('Login', {name: 'Luiz'});
  }

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.vaccineIcon}
          source={require('../../assets/images/icon-vaccine.jpg')}
        />
        <Text style={styles.titleHeader}>MyHealth</Text>
      </View>

      <View styles={styles.inputContainer}>
        <View style={styles.inputSection}>
          <View style={styles.labelBox}>
            <Text style={styles.label}>E-mail</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#419ED7"
            />
          </View>
          {emailError.length > 0 && (
            <Text style={styles.error}>{emailError}</Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button
            onPress={createAccount}
            title="Recuperar senha"
            color="#37BD6D"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
