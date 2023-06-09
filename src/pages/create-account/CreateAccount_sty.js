import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
    fontFamily: 'Averia Libre',
    fontSize: 38,
    position: 'relative',
    display: 'flex',
    paddingTop: 100,
    paddingBottom: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#C1E7E3',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  titleHeader: {
    fontFamily: 'Averia Libre',
    fontSize: 38,
    color: '#419ED7',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    position: 'relative',
  },
  inputSectionRadio: {
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    position: 'relative',
  },
  labelBox: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  label: {
    fontSize: 16,
  },
  inputBox: {
    width: '65%',
  },
  inputBoxDate: {
    width: '65%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 41,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  inputDate: {
    width: 158,
    height: 41,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  dateBox: {
    backgroundColor: 'white',
    width: 50,
    height: 41,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  inputDateButton: {
    width: 50,
    height: 41,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30
  },
  buttonBox: {
    width: '40%',
    fontSize: 18,
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
  },
  radioBox: {
    width: 150,
    margin: -3,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  radio: {
    color: 'white',
    backgroundColor: '#419ED7',
  },
  error: {
    position: 'absolute',
    bottom: -6,
    left: 130,
    color: 'red',
    zIndex: 99,
  },
});

export {styles};
