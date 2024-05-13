import { View, Text, StyleSheet, Image } from "react-native";

export function DetalleScreen({ route }) {
    const { personaje } = route.params;

    return (
        <>
        { personaje ? (
            <View style={styles.container}>
                <Image source={{ uri: personaje.image }} style={styles.image} />
                <Text style={styles.name}>Nombre: {personaje.name}</Text>
                <Text style={styles.text}>Estado: {personaje.status}</Text>
                <Text style={styles.text}>Especie: {personaje.species}</Text>
                <Text style={styles.text}>Genero: {personaje.gender}</Text>
            </View>

        ) : (
            <Text>Cargando...</Text>
        )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
    },
})