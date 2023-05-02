import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
    fontFamily: 'Averia Libre',
    fontSize: 38,
    position: 'relative',
    display: 'flex',
    paddingTop: 40,
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
  },
  inputSectionUpload: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
  },
  labelBox: {
    width: '38%',
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
  inputBoxUpload: {
    width: '65%',
    display: 'flex',
  },
  input: {
    height: 41,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  inputDate: {
    width: 150,
    height: 41,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  dateBox: {
    backgroundColor: 'red',
    marginHorizontal: 5
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
    paddingBottom: 30,
  },
  buttonBox: {
    width: '40%',
    fontSize: 18,
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
  },
  imgBox: {
    width: 208,
    height: 100,
    marginVertical: 5,
    backgroundColor: 'green'
  }
});

export {styles};
