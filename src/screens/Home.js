import { useState, useEffect } from "react";
import { View, Text, StatusBar, StyleSheet, ImageBackground } from "react-native";
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

const image = require('../../assets/img/rickandmorty.jpg')

export function HomeScreen({ navigation }) {
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Consumo de Api" style={{alignItems: 'center'}} />
      </Appbar.Header>

      <ImageBackground source={image}  resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
            <Button
              mode="elevated"
              buttonColor="#072e33"
              textColor="#fff"
              onPress={() => navigation.navigate('Settings')}>
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
  }
});