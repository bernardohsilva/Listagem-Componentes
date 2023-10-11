import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export function TelaAgendamento() {

    const navigation = useNavigation();

    const [agendaValues, setAgendaValues] = useState({
        nome: '',
        idade: '',
        nacionalidade: '',
        experiencia: '',
    });
    const handleChange = (field, value) => {
        setAgendaValues({ ...agendaValues, [field]: value });
    };

    const handleSubmit = () => {
        console.log(agendaValues);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamento</Text>

            <TextInput style={styles.input}
                placeholder="Nome do técnico"
                value={agendaValues.nome}
                onChangeText={(value) => handleChange('nome', value)}
            />
            <TextInput style={styles.input}
                placeholder="Idade do técnico"
                value={agendaValues.idade}
                onChangeText={(value) => handleChange('idade', value)}
            />
            <TextInput style={styles.input}
                placeholder="Nacionalidade do técnico"
                value={agendaValues.nacionalidade}
                onChangeText={(value) => handleChange('nacionalidade', value)}
            />
            <TextInput style={styles.input}
                placeholder="Experiência do técnico"
                value={agendaValues.experiencia}
                onChangeText={(value) => handleChange('experiencia', value)}
            />

            <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaRegistro')}>
                <Text style={styles.textButton}>Jogadores</Text>
            </TouchableOpacity>
            </View>
            { }
            {Object.entries(agendaValues).map(([field, value]) => (
                <Text style={styles.textInput} key={field}>{`${value}`}</Text>
            ))}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        paddingBottom: 10,
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        margin: 20
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        margin: 10, 
        backgroundColor: 'white',
        padding: 5,
        height: 30,
        borderRadius: 5
    },
    textButton: {
        color: 'black'
    },
    textInput: {
        color: 'white',
        marginBottom: 20
    }
});