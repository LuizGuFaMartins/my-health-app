import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
  },
  gradient: {
    opacity: 0.8,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    height: '100%',
    padding: 10,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    fontFamily: 'Averia Libre',
    flexDirection: 'row',
  },
  vaccineIcon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 54,
    color: '#419ED7',
    textDecorationLine: 'underline',
  },
  titlePar: {
    fontSize: 38,
    color: '#419ED7',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  inputBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  label: {
    width: '16%',
    fontSize: 18,
    paddingRight: 10,
  },
  input: {
    width: '84%',
    height: 51,
    backgroundColor: 'white',
    color: '#419ED7',
    paddingHorizontal: 10,
  },
  error: {
    position: 'absolute',
    bottom: -5,
    left: 50,
    color: 'red',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonBox: {
    width: '70%',
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
