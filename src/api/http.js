import { useState } from "react";

export const LlamadaApi  = () => {
    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setPersonajes(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return { personajes, getPersonajes };
};