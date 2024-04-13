import axios from "axios";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from "react-native";

import Config from 'react-native-config';

const TOKEN = process.env.PLANT_TOKEN;

export default function PlantSearch(){
    const [plantnamesearch, setPlantNameSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchPlant = async () => {
        try {
            if (plantnamesearch) {
                const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=${TOKEN}&q=${plantnamesearch}`);
                setSearchResults(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <Text> Pflanzensuche</Text>
            <TextInput onChangeText={setPlantNameSearch} value={plantnamesearch} />
            <Button title="Pflanze suchen" onPress={searchPlant} />
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.common_name}</Text>}
            />
        </View>
    );
}