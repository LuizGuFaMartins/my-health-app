import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '47%',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 5,
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
    width: 150,
    height: 80,
    marginVertical: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 80,
  },
  nextText: {
    color: '#FD7979',
    fontSize: 12,
    width: '100%',
    textAlign: 'right',
  },
});

export {styles};
