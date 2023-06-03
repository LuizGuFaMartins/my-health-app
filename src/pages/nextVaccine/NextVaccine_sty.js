import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD4D0',
    height: '100%',
    overflow: 'scroll',
    position: 'relative',
    padding: 15,
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
    backgroundColor: 'white',
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
  cardsContainer: {
    width: '100%',
    paddingHorizontal: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    paddingBottom: 60,
  },
  footerButton: {
    width: '100%',
    backgroundColor: '#ADD4D0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonBox: {
    width: '50%',
    fontSize: 18,
    marginVertical: 20,
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    title: {
      fontSize: 25,
      color: '#3F92C5',
    },
  },
});

export {styles};
