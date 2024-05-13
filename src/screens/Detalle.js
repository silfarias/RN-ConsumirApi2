import { Text, StyleSheet, Image } from "react-native";
import { Appbar } from 'react-native-paper';
import { Card } from 'react-native-paper';

export function DetalleScreen({ route, navigation }) {

    const { personaje } = route.params;

    return (
        <>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.navigate('ListaPersonajes')} />
                <Appbar.Content title="Personaje" />
            </Appbar.Header>

            {personaje ? (
                <Card style={styles.container}>
                    <Card.Content>

                        <Text style={styles.name}>{personaje.name}</Text>

                        <Image source={{ uri: personaje.image }} style={styles.image} />

                        <Text style={styles.text}>Estado: {personaje.status}</Text>
                        <Text style={styles.text}>Especie: {personaje.species}</Text>
                        <Text style={styles.text}>Genero: {personaje.gender}</Text>
                        <Text style={styles.text}>Origen: {personaje.origin.name}</Text>
                        <Text style={styles.text}>Localización: {personaje.location.name}</Text>

                    </Card.Content>
                </Card>

            ) : (
                <Text>Cargando...</Text>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0f968c',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        margin: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#cccc',
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
})