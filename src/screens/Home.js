import { View, ImageBackground, StyleSheet} from "react-native";
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { LlamadaApi } from "../api/http";
import { useEffect } from "react";


const image = require('../../assets/img/rickandmorty.jpg')

export function HomeScreen({ navigation }) {

  const { personajes, getPersonajes } = LlamadaApi();

  const handleVerPersonajes = () => useEffect(() => {
      getPersonajes();
      navigation.navigate('ListaPersonajes');
  }, []);

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Consumo de Api" style={{alignItems: 'center'}} />
      </Appbar.Header>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Button
            mode="elevated"
            buttonColor="#072e33"
            textColor="#fff"
            onPress={() => handleVerPersonajes()}
          >
            Ver Lista de Personajes
          </Button>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0f968c',
  },
});