import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import moment from 'moment';
import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {launchCamera} from 'react-native-image-picker';
import {Provider, RadioButton} from 'react-native-paper';
import {auth, db, storage} from '../../firebase/config';
import {styles} from './CreateVaccine_sty';

const CreateVaccine = ({navigation}) => {
  const [vaccineDate, onChangeVaccineDate] = React.useState(new Date());
  const [vaccineNextDate, onChangeVaccineNextDate] = React.useState(new Date());
  const [openDate, onChangeOpenDate] = React.useState(false);
  const [openNext, onChangeOpenNext] = React.useState(false);
  const [user, setUser] = React.useState();

  const [date, onChangeDate] = React.useState('');
  const [vaccine, onChangeVaccine] = React.useState('');
  const [dose, onChangeDose] = React.useState('');
  const [upload, onChangeUpload] = React.useState();
  const [uploadUrl, onChangeUploadUrl] = React.useState('');
  const [nextDate, onChangeNextDate] = React.useState('');

  const [dateError, onChangeDateError] = React.useState('');
  const [vaccineError, onChangeVaccineError] = React.useState('');
  const [doseError, onChangeDoseError] = React.useState('');
  const [uploadError, onChangeUploadError] = React.useState('');
  const [nextError, onChangeNextError] = React.useState('');

  async function createVaccine() {
    if (validateFields()) {
      const collectio = collection(db, 'vaccines');
      const imageRef = ref(storage, `ìmages/${upload.fileName}`);

      const file = await fetch(uploadUrl);
      const blob = await file.blob();

      uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
        .then(result => {
          console.log('Arquivo foi enviado com sucesso.');
          getDownloadURL(imageRef).then(url => {
            const vac = {
              date,
              vaccine,
              dose,
              uploadUrl: url,
              nextDate,
              user_id: auth.currentUser.uid,
            };

            console.log('vacina: ', vac);

            addDoc(collectio, vac)
              .then(refDoc => {
                console.log(
                  'Vacina inserida com sucesso: ' + JSON.stringify(refDoc),
                );
                navigation.navigate('Home', {});
              })
              .catch(error => {
                console.log('Error: ' + JSON.stringify(error));
              });
          });
        })
        .catch(error => {
          console.log('Erro ao enviar arquivo: ' + JSON.stringify(error));
        });
    }
  }

  const takePicture = () => {
    launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
      .then(result => {
        onChangeUpload(result.assets[0]);
        onChangeUploadUrl(result.assets[0].uri);
      })
      .catch(error => {
        console.log('Error ao capturar imagem: ' + JSON.stringify(error));
      });
  };

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

    if (!uploadUrl) {
      onChangeUploadError('Upload inválido');
      isValid = false;
    }

    if (!nextDate) {
      onChangeNextError('Data inválida');
      isValid = false;
    }

    return isValid;
  }

  function changeDate(value) {
    onChangeOpenDate(false);
    onChangeVaccineDate(value);
    let formatedDate = moment(value).format('DD/MM/YYYY');
    onChangeDate(formatedDate);
  }

  function changeNextDate(value) {
    onChangeOpenNext(false);
    onChangeVaccineNextDate(value);
    let formatedDate = moment(value).format('DD/MM/YYYY');
    onChangeNextDate(formatedDate);
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
                editable={false}
                value={date}
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
                onPress={takePicture}
                title="Selecionar Imagem..."
                color="#419ED7"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={styles.imgBox}>
                {upload !== undefined && (
                  <Image style={styles.image} source={upload} />
                )}
              </View>
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
                editable={false}
                value={nextDate}
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
                  mode="date"
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

export default CreateVaccine;
