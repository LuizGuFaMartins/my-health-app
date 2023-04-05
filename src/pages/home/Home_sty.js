import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD4D0',
    height: '100%',
    overflow: 'scroll',
    position: 'relative',   
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
  },
  card: {
    width: '48%',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  titleDate: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    title: {
      color: '#3F92C5',
      fontSize: 22,
    },
    dose: {
      backgroundColor: '#3F92C5',
      padding: 1,
      paddingHorizontal: 10,
      fontSize: 13,
      margin: 2,
    },
    date: {
      color: '#3F92C5',
    },
  },
  imageCardBox: {
    height: 80,
    marginVertical: 8,
    backgroundColor: 'gray',
  },
  nextText: {
    color: '#FD7979',
    fontSize: 12,
    width: '100%',
    textAlign: 'right',
  },
  footerButton: {
    width: '100%',
    height: 150,
    backgroundColor: '#ADD4D0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
  },
  buttonBox: {
    width: '50%',
    fontSize: 18,
    marginVertical: 20,
  },

});

export {styles};
