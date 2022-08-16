import { SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Login() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.form}>
          <Text style={[styles.header]}>Go <Text style={{ color: 'white' }}>Shop</Text>.</Text>
          <SafeAreaView>
            <SafeAreaView style={styles.formContent}>
              <Text style={styles.colorInFont}>Usuário</Text>
              <TextInput style={[styles.input, { marginTop: 8 }]} />
            </SafeAreaView>
            <SafeAreaView style={[styles.formContent, { marginTop: 16, marginBottom: 42 }]}>
              <Text style={styles.colorInFont}>Senha</Text>
              <TextInput style={[styles.input, { marginTop: 8 }]} />
            </SafeAreaView>
          </SafeAreaView>
          <TouchableOpacity style={styles.login}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Logar-se</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </>
  )
}