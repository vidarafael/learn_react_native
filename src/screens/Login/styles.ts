import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  form: {
    width: 350,
    height: 400,
    backgroundColor: 'rgb(32, 32, 36)',
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    padding: 24
  },
  header: {
    fontSize: 32,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5b5bc7',
    marginBottom: 32
  },
  colorInFont: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 18,
    paddingX: 4
  },
  login: {
    width: '80%',
    backgroundColor: '#5b5bc7',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    borderRadius: 4,
    padding: 4,
  }
})

export { styles }