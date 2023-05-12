import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
    fontFamily: 'Averia Libre',
    fontSize: 38,
    padding: 15,
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#419ED7',
    marginBottom: 20,
    paddingBottom: 10,
  },
  username: {
    color: '#419ED7',
    fontSize: 36,
  },
  routesList: {
    height: 200,
  },
  routeItem: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    color: '#419ED7',
    fontSize: 25,
    padding: 10
  },
});

export {styles};
