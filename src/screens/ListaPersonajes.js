import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { Appbar } from 'react-native-paper';
import { LlamadaApi } from "../api/http";

export function ListaPersonajes({ navigation }) {
  const { personajes } = LlamadaApi();
  
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Lista de Personajes" />
      </Appbar.Header>

      <FlatList
        data={personajes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detalle', { personaje: item })}
          >
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.species}>{item.species}</Text>
            </View>                   
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f968c',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  species: {
    fontSize: 16,
    marginTop: 5,
  },
});
