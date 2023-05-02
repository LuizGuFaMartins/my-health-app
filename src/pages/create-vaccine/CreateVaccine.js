import moment from 'moment';
import React from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {styles} from './CreateVaccine_sty';

const CreateVaccine = ({navigation}) => {
  const [vaccineDate, onChangeVaccineDate] = React.useState(new Date());
  const [vaccineNextDate, onChangeVaccineNextDate] = React.useState(new Date());

  const [vaccine, onChangeVaccine] = React.useState('');
  const [dose, onChangeDose] = React.useState('');
  const [proof, onChangeProof] = React.useState('');
  const [date, setDate] = React.useState('');
  const [nextDate, setNextDate] = React.useState('');
  const [openDate, setOpenDate] = React.useState(false);
  const [openNext, setOpenNext] = React.useState(false);

  const [dateError, onChangeDateError] = React.useState('');
  const [vaccineError, onChangeVaccineError] = React.useState('');
  const [doseError, onChangeDoseError] = React.useState('');

  function createAccount() {
    navigation.navigate('Login', {name: 'Luiz'});
  }

  function validateFields() {
    onChangeDateError('');
    onChangePasswordError('');
    let isValid = true;
    const emailRegex =
      /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/g;

    if (!email.match(emailRegex)) {
      onChangeDateError('E-mail inválido');
      error = false;
    }

    if (!password) {
      onChangePasswordError('Senha inválida');
      error = false;
    }

    return isValid;
  }

  function changeDate(value) {
    setOpenDate(false);
    onChangeVaccineDate(value);
    const date = moment(value);
    const formattedDate = date.format('DD/MM/YYYY');
    setDate(formattedDate);
  }

  function changeNextDate(value) {
    setOpenNext(false);
    onChangeVaccineNextDate(value);
    const date = moment(value);
    const formattedDate = date.format('DD/MM/YYYY');
    setNextDate(formattedDate);
  }

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.inputContainer}>
        <View styles={styles.inputContainer}>
          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Data de vacinação</Text>
            </View>
            <View style={styles.inputBoxDate}>
              <TextInput
                style={styles.inputDate}
                value={date}
                placeholder="Data de vacinação"
                placeholderTextColor="#419ED7"
              />
              <View style={styles.dateBox}>
                <Button
                  style={styles.inputDateButton}
                  title="Abrir"
                  onPress={() => setOpenDate(true)}
                />
                <DatePicker
                  modal
                  open={openDate}
                  date={vaccineDate}
                  onConfirm={value => {
                    changeDate(value);
                  }}
                  onCancel={() => {
                    setOpenDate(false);
                  }}
                />
              </View>
            </View>
            {dateError.length > 0 && (
              <Text style={styles.error}>{dateError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Vacina</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeVaccine}
                value={vaccine}
                placeholder="Vacina"
                placeholderTextColor="#419ED7"
              />
            </View>
            {dateError.length > 0 && (
              <Text style={styles.error}>{dateError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Dose</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeDose}
                value={dose}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#419ED7"
              />
            </View>
            {dateError.length > 0 && (
              <Text style={styles.error}>{dateError}</Text>
            )}
          </View>

          <View style={styles.inputSectionUpload}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Comprovante</Text>
            </View>
            <View style={styles.inputBoxUpload}>
              <Button
                onPress={createAccount}
                title="Selecionar Imagem..."
                color="#419ED7"
                accessibilityLabel="Learn more about this purple button"
              />
            <View style={styles.imgBox}></View>
            </View>
            {dateError.length > 0 && (
              <Text style={styles.error}>{dateError}</Text>
            )}
          </View>

          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Próxima vacinação</Text>
            </View>
            <View style={styles.inputBoxDate}>
              <TextInput
                style={styles.inputDate}
                value={nextDate}
                placeholder="Próxima vacinação"
                placeholderTextColor="#419ED7"
              />
              <View style={styles.dateBox}>
                <Button
                  style={styles.inputDateButton}
                  title="Abrir"
                  onPress={() => setOpenNext(true)}
                />
                <DatePicker
                  modal
                  open={openNext}
                  date={vaccineNextDate}
                  onConfirm={value => {
                    changeNextDate(value);
                  }}
                  onCancel={() => {
                    setOpenNext(false);
                  }}
                />
              </View>
            </View>
            {dateError.length > 0 && (
              <Text style={styles.error}>{dateError}</Text>
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

export default CreateVaccine;
