import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD4D0',
    height: '100%',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  title: {
    height: 50,
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconBox: {
    width: '14%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 41,
    backgroundColor: 'white'
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  input: {
    height: 41,
    width: '86%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    fontSize: 19,
  },
});

export {styles};
