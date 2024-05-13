import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text, ActivityIndicator } from "react-native";
import { Appbar } from 'react-native-paper';
import { LlamadaApi } from "../api/http";

export function ListaPersonajes({ navigation }) {
    const { personajes, getPersonajes } = LlamadaApi();

    useEffect(() => {
        getPersonajes();
    }, []);

    return (
        <>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Lista de Personajes" />
            </Appbar.Header>

            {personajes ? (
                <FlatList
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detalle', { personaje: item })}>
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.species}>{item.species}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <Text>Cargando Personajes...</Text>
            )}
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
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
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
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
