import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour</Text>
      <Text> Voici la liste des tâches : </Text>
      <button style={styles.button}> Catégories </button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    marginLeft: 25,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  button: {
    width: 20,
    marginTop: 20,
  },
});
