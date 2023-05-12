import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Provider, RadioButton} from 'react-native-paper';
import {styles} from './EditVaccine_sty';
import Vaccine from '../../models/Vaccine';

const EditVaccine = ({navigation}) => {
  // <Modal
  //   animationType="none"
  //   visible={true}
  //   transparent={true}
  //   onRequestClose={() => {
  //     console.log('Modal closed');
  //   }}></Modal>
  const [vaccineDate, onChangeVaccineDate] = React.useState(new Date());
  const [vaccineNextDate, onChangeVaccineNextDate] = React.useState(new Date());
  const [openDate, onChangeOpenDate] = React.useState(false);
  const [openNext, onChangeOpenNext] = React.useState(false);

  const [date, onChangeDate] = React.useState('');
  const [vaccine, onChangeVaccine] = React.useState('');
  const [dose, onChangeDose] = React.useState('');
  const [uploadUrl, onChangeUploadUrl] = React.useState('');
  const [nextDate, onChangeNextDate] = React.useState('');

  const [dateError, onChangeDateError] = React.useState('');
  const [vaccineError, onChangeVaccineError] = React.useState('');
  const [doseError, onChangeDoseError] = React.useState('');
  const [uploadError, onChangeUploadError] = React.useState('');
  const [nextError, onChangeNextError] = React.useState('');

  function createVaccine() {
    if (validateFields()) {
      const data = {
        date,
        vaccine,
        dose,
        uploadUrl,
        nextDate,
      };
      Vaccine.new(data);
      navigation.navigate('Home', {});
    }
  }

  const theme = {
    colors: {
      primary: '#419ED7', // cor quando selecionado
      secondary: '#419ED7', // cor quando selecionado
    },
  };

  function validateFields() {
    onChangeDateError('');
    onChangeVaccineError('');
    onChangeDoseError('');
    onChangeUploadError('');
    onChangeNextError('');
    let isValid = true;

    if (!date) {
      onChangeDateError('Data inválida');
      isValid = false;
    }

    if (!vaccine) {
      onChangeVaccineError('E-mail inválido');
      isValid = false;
    }

    if (!dose) {
      onChangeDoseError('Dose inválida');
      isValid = false;
    }

    // if (!uploadUrl) {
    //   onChangeUploadError('Upload inválido');
    //   isValid = false;
    // }

    if (!nextDate) {
      onChangeNextError('Data inválida');
      isValid = false;
    }

    return isValid;
  }

  function changeDate(value) {
    onChangeOpenDate(false);
    onChangeVaccineDate(value);
    onChangeDate(moment(value).format('DD/MM/YYYY'));
  }

  function changeNextDate(value) {
    onChangeOpenNext(false);
    onChangeVaccineNextDate(value);
    onChangeNextDate(moment(value).format('DD/MM/YYYY'));
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View styles={styles.inputContainer}>
          <View style={styles.inputSection}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Data de vacinação</Text>
            </View>
            <View style={styles.inputBoxDate}>
              <TextInput
                style={styles.inputDate}
                value={date}
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
                  open={openDate}
                  date={vaccineDate}
                  onConfirm={value => {
                    changeDate(value);
                  }}
                  onCancel={() => {
                    onChangeOpenDate(false);
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
            {vaccineError.length > 0 && (
              <Text style={styles.error}>{vaccineError}</Text>
            )}
          </View>

          <View style={styles.inputSectionRadio}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Dose</Text>
            </View>
            <View style={styles.inputBox}>
              <Provider theme={theme}>
                <RadioButton.Group
                  onValueChange={newDose => onChangeDose(newDose)}
                  value={dose}>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="1a. dose" />
                    <Text>1a. dose</Text>
                  </View>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="2a. dose" />
                    <Text>2a. dose</Text>
                  </View>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="3a. dose" />
                    <Text>3a. dose</Text>
                  </View>
                  <View style={styles.radioBox}>
                    <RadioButton style={styles.radio} value="Dose única" />
                    <Text>Dose única</Text>
                  </View>
                </RadioButton.Group>
              </Provider>
            </View>
            {doseError.length > 0 && (
              <Text style={styles.error}>{doseError}</Text>
            )}
          </View>

          <View style={styles.inputSectionUpload}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>Comprovante</Text>
            </View>
            <View style={styles.inputBoxUpload}>
              <Button
                onPress={createVaccine}
                title="Selecionar Imagem..."
                color="#419ED7"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={styles.imgBox}></View>
            </View>
            {uploadError.length > 0 && (
              <Text style={styles.error}>{uploadError}</Text>
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
                editable={false}
                placeholder="Próxima vacinação"
                placeholderTextColor="#419ED7"
              />
              <View style={styles.dateBox}>
                <TouchableOpacity onPress={() => onChangeOpenNext(true)}>
                  <FontAwesomeIcon
                    style={styles.icon}
                    color={'#419ED7'}
                    size={28}
                    icon={faCalendar}></FontAwesomeIcon>
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={openNext}
                  date={vaccineNextDate}
                  onConfirm={value => {
                    changeNextDate(value);
                  }}
                  onCancel={() => {
                    onChangeOpenNext(false);
                  }}
                />
              </View>
            </View>
            {nextError.length > 0 && (
              <Text style={styles.error}>{nextError}</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button
            onPress={createVaccine}
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

export default EditVaccine;
