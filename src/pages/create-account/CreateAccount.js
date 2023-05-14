import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import React from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {Provider, RadioButton} from 'react-native-paper';
import {styles} from './CreateAccount_sty';
import Users from '../../models/Users';

const CreateAccount = ({navigation}) => {
  const [openDate, onChangeOpenDate] = React.useState(false);

  const [name, onChangeName] = React.useState('');
  const [gender, onChangeGender] = React.useState('');
  const [birthdayDateInput, onChangeBirthdayDateInput] = React.useState('');
  const [birthdayDate, onChangeBirthdayDate] = React.useState(new Date());
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  const [nameError, onChangeNameError] = React.useState('');
  const [genderError, onChangeGenderError] = React.useState('');
  const [birthdayDateError, onChangeBirthdayDateError] = React.useState('');
  const [emailError, onChangeEmailError] = React.useState('');
  const [passwordError, onChangePasswordError] = React.useState('');
  const [confirmPasswordError, onChangeConfirmPasswordError] =
    React.useState('');

  const theme = {
    colors: {
      primary: '#419ED7', // cor quando selecionado
      secondary: '#419ED7', // cor quando selecionado
    },
  };

  function createAccount() {
    if (validateFields()) {
      const user = {
        name,
        gender,
        birthdayDate,
        email,
        password,
      };
      Users.new(user);
      navigation.navigate('Login', {});
    }
  }

  function validateFields() {
    onChangeNameError('');
    onChangeGenderError('');
    onChangeBirthdayDateError('');
    onChangeEmailError('');
    onChangePasswordError('');
    onChangeConfirmPasswordError('');
    let isValid = true;
    const emailRegex =
      /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/g;

    if (!name) {
      onChangeNameError('Nome inválido');
      isValid = false;
    }

    if (!gender) {
      onChangeGenderError('Selecione um gênero');
      isValid = false;
    }

    if (!birthdayDateInput) {
      onChangeBirthdayDateError('Data inválida');
      isValid = false;
    }

    if (!email.match(emailRegex) || Users.getElementByEmail(email)) {
      onChangeEmailError('E-mail inválido');
      isValid = false;
    }

    if (!password) {
      onChangePasswordError('Senha inválida');
      isValid = false;
    }

    if (confirmPassword !== password || !confirmPassword) {
      if (confirmPassword) {
        onChangeConfirmPasswordError('Confirmação de senha inválida');
        isValid = false;
      } else {
        onChangeConfirmPasswordError('As senhas devem ser iguais');
        isValid = false;
      }
    }

    return isValid;
  }

  function changeDate(value) {
    onChangeOpenDate(false);
    onChangeBirthdayDate(value);
    onChangeBirthdayDateInput(moment(value).format('DD/MM/YYYY'));
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

      <ScrollView styles={styles.inputContainer}>
        <View>
          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Nome completo</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                selectionColor="#419ED7"
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                Type="flat"
                placeholder="Digite seu nome completo"
                placeholderTextColor="#419ED7"
              />
            </View>
            {nameError.length > 0 && (
              <Text style={styles.error}>{nameError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Sexo</Text>
            </View>
            <View style={styles.inputBox}>
              <Provider theme={theme}>
                <RadioButton.Group
                  onValueChange={newGender => onChangeGender(newGender)}
                  value={gender}>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="Masculino" />
                    <Text>Masculino</Text>
                  </View>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="Feminino" />
                    <Text>Feminino</Text>
                  </View>
                </RadioButton.Group>
              </Provider>
            </View>
            {genderError.length > 0 && (
              <Text style={styles.error}>{genderError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Data nascimento</Text>
            </View>
            <View style={styles.inputBoxDate}>
              <TextInput
                style={styles.inputDate}
                value={birthdayDateInput}
                editable={false}
                placeholder="Data de vacinação"
                placeholderTextColor="#419ED7"
              />
              <View style={styles.dateBox}>
                <TouchableOpacity onPress={() => onChangeOpenDate(true)}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    color={'#419ED7'}
                    size={28}
                    icon={faCalendar}></FontAwesomeIcon>
                </TouchableOpacity>
                <DatePicker
                  modal
                  mode="date"
                  open={openDate}
                  date={birthdayDate}
                  onConfirm={value => {
                    changeDate(value);
                  }}
                  onCancel={() => {
                    onChangeOpenDate(false);
                  }}
                />
              </View>
            </View>
            {birthdayDateError.length > 0 && (
              <Text style={styles.error}>{birthdayDateError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>E-mail</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                selectionColor="#419ED7"
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

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Senha</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                selectionColor="#419ED7"
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Digite sua senha"
                placeholderTextColor="#419ED7"
              />
            </View>
            {passwordError.length > 0 && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Repetir senha</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                selectionColor="#419ED7"
                style={styles.input}
                onChangeText={onChangeConfirmPassword}
                value={confirmPassword}
                placeholder="Digite novamente sua senha"
                placeholderTextColor="#419ED7"
              />
            </View>
            {confirmPasswordError.length > 0 && (
              <Text style={styles.error}>{confirmPasswordError}</Text>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button
            onPress={createAccount}
            title="Cadastrar"
            color="#37BD6D"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
