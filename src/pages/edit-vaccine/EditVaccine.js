import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';
import React, {useEffect} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Modal, Portal, Provider, RadioButton} from 'react-native-paper';
import Vaccine from '../../models/Vaccine';
import {styles} from './EditVaccine_sty';
import Users from '../../models/Users';
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {auth, db, storage} from '../../firebase/config';
import {launchCamera} from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const EditVaccine = ({navigation, route}) => {
  const stateVaccine = useSelector(state => state.vaccine);
  const [visible, setVisible] = React.useState(false);
  const [vaccineDate, onChangeVaccineDate] = React.useState(new Date());
  const [vaccineNextDate, onChangeVaccineNextDate] = React.useState(new Date());
  const [openDate, onChangeOpenDate] = React.useState(false);
  const [openNext, onChangeOpenNext] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  const theme = {
    colors: {
      primary: '#419ED7', // cor quando selecionado
      secondary: '#419ED7', // cor quando selecionado
    },
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    if (stateVaccine) {
      onChangeDate(stateVaccine.date);
      onChangeVaccine(stateVaccine.vaccine);
      onChangeDose(stateVaccine.dose);
      onChangeUploadUrl(stateVaccine.uploadUrl);
      onChangeNextDate(stateVaccine.nextDate);
    }
  }, [stateVaccine]);

  async function updateVaccine() {
    if (validateFields()) {
      setLoading(true);
      const refVaccine = doc(db, 'vaccines', stateVaccine.id);

      if (!upload) {
        updateDoc(refVaccine, {
          date,
          vaccine,
          dose,
          uploadUrl: uploadUrl,
          nextDate,
        })
          .then(refDoc => {
            console.log(
              'Vacina inserida com sucesso: ' + JSON.stringify(refDoc),
            );
            setLoading(false);
            navigation.navigate('Home', {});
          })
          .catch(error => {
            console.log('Error: ' + JSON.stringify(error));
          });
      } else {
        const imageRef = ref(storage, `ìmages/${upload.fileName}`);

        const file = await fetch(uploadUrl);
        const blob = await file.blob();

        uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
          .then(result => {
            console.log('Arquivo foi enviado com sucesso.');
            getDownloadURL(imageRef).then(url => {
              updateDoc(refVaccine, {
                date,
                vaccine,
                dose,
                uploadUrl: url,
                nextDate,
                userId: auth.currentUser.uid,
              })
                .then(refDoc => {
                  console.log(
                    'Vacina inserida com sucesso: ' + JSON.stringify(refDoc),
                  );
                  setLoading(false);
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

  function deleteVaccine() {
    const refVaccine = doc(db, 'vaccines', stateVaccine.id);
    deleteDoc(refVaccine)
      .then(() => {
        console.log('Documento excluído com sucesso!!!');
        navigation.navigate('Home', {});
      })
      .catch(error => {
        console.log('Erro ao excluir o documento: ' + error);
      });
  }

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
                {uploadUrl && upload === undefined ? (
                  <Image source={{uri: uploadUrl}} style={styles.image} />
                ) : null}
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
      {loading && (
        <View style={styles.loading}>
          <Text style={styles.loading.title}>Salvando edição...</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button
            onPress={updateVaccine}
            title="Salvar alterações"
            color="#37BD6D"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonBox}>
          <Provider>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                transparent={true}
                contentContainerStyle={styles.modalBox}>
                <View style={styles.modal}>
                  <Text style={styles.modalTitle}>
                    Tem certeza que deseja remover essa vacina?
                  </Text>
                  <View style={styles.modalButtons}>
                    <View style={styles.buttonBox}>
                      <Button
                        onPress={deleteVaccine}
                        title="Sim"
                        color="#FD7979"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.button}
                      />
                    </View>
                    <View style={styles.buttonBox}>
                      <Button
                        onPress={hideModal}
                        title="Cancelar"
                        color="#37BD6D"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.button}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </Portal>
            <Button
              onPress={showModal}
              title="Excluir"
              color="#FD7979"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </Provider>
        </View>
      </View>
    </View>
  );
};

export default EditVaccine;
