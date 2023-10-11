import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function TelaRegistro(){

  const navigation = useNavigation();

  const [data] = useState([
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
      },
      {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
      },
      {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
      },
      {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
      },
      {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
      },
      {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
      },
      {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
      },
      {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
      },
      {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
      },
      {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
      },
  ]);

  const [expandedCards, setExpandedCards] = useState([] as boolean[]);

  const toggleCard = (index: number) => {
    const newExpandedCards = [...expandedCards];
    newExpandedCards[index] = !newExpandedCards[index];
    setExpandedCards(newExpandedCards);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => toggleCard(index)}>
          <Text style={styles.cardText}>
            Nome: {item.name}
          </Text>
          {expandedCards[index] && (
            <>
              <Text style={styles.cardText}>
                Posição: {item.position}
              </Text>
              <Text style={styles.cardText}>
                Idade: {item.age}
              </Text>
            </>
          )}
        </TouchableOpacity>

      </View>
      
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jogadores</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaAgendamento')}>
          <Text style={styles.textButton}>Formulario</Text>
        </TouchableOpacity>
    </View>
  );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        flex: 1,
        alignItems: 'center',        
    },

    title:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        paddingBottom: 10,
    },

    card:{
        color: '#000',
        backgroundColor: "#ffe",
        borderRadius: 5,
        fontWeight: "400",
        width: '100%',
        margin: 10,
        padding: 10,
    },

    cardText:{
        color: 'preto',
        fontWeight: "400",

        width: '100%',
        margin: 5,
    },
    button: {
      margin: 10,
      marginBottom: 50, 
      backgroundColor: 'white',
      padding: 5,
      height: 30,
      borderRadius: 5
  },
  textButton: {
      color: 'black'
  },
});