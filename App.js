import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bonjour</Text>
            <Text> Voici la liste des tâches : </Text>
            <div>
                {types.map((type, index) => (
                    <button style={styles.button} key={index}>{type}</button>
                ))}
            </div>
            <StatusBar style="auto"/>
        </View>
    );
}

const types = ["Travail", "Rappels", "Personnel"];

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
        width: 92,
        marginTop: 20,
        border: 0,
        color: 'white',
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 7,
        flexDirection: 'row',
        marginRight: 12
    },
});

const buttonStyle = {
    width: 92,
    marginTop: 20,
    border: 0,
    color: 'white',
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 7,
    flexDirection: 'row',
    marginRight: 12
}
