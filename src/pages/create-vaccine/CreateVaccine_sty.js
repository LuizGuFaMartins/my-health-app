import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
    fontFamily: 'Averia Libre',
    fontSize: 38,
    paddingVertical: 100,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
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
    paddingHorizontal: 20
  },
  labelBox: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  label: {
    fontSize: 16,
  },
  inputBox: {
    width: '60%',
  },
  input: {
    height: 41,
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
    width: '40%',
    fontSize: 18,
    marginVertical: 20,
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'red',
  },
});

export {styles};
