import axios from "axios";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, Modal , TouchableOpacity } from "react-native";

import Config from 'react-native-config';

type PlantItem = {
    id: number;
    common_name: string;
    scientific_name: string;
    image_url: string;
};

export default function PlantSearch(){
    const [plantnamesearch, setPlantNameSearch] = useState("");
    const [searchResults, setSearchResults] = useState<PlantItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const searchPlant = async () => {
        try {
            console.log(Config.PLANT_TOKEN)
            if (plantnamesearch) {
                const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=${Config.PLANT_TOKEN}&q=${plantnamesearch}`);
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
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.common_name}</Text>
                        <Text>{item.scientific_name}</Text>
                        <TouchableOpacity onPress={() => {setModalVisible(true); setModalImage(item.image_url)}}>
                            <Image 
                                source={{uri: item.image_url}} 
                                style={{width: 100, height: 100}} 
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        {modalImage && <Image source={{uri: modalImage}} style={{width: 300, height: 300}} />}
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}