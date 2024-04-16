import axios from "axios";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Modal , TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import SharedFlatList from '../components/listElements';

import Config from 'react-native-config';
import { PlantItem } from '../types/plantItem';

export default function PlantSearch(){
    const [plantnamesearch, setPlantNameSearch] = useState("");
    const [searchResults, setSearchResults] = useState<PlantItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const searchPlant = async () => {
        setIsLoading(true);
        try {
            if (plantnamesearch) {
                const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=${Config.PLANT_TOKEN}&q=${plantnamesearch}`);
                setSearchResults(response.data.data || []);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Pflanzensuche</Text>
            <TextInput style={styles.input} onChangeText={setPlantNameSearch} value={plantnamesearch} />
            <Button title="Pflanze suchen" onPress={searchPlant} />
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                <SharedFlatList 
                    data={searchResults.map(item => ({
                        id: item.id,
                        name: item.common_name,
                        description: item.scientific_name,
                        image_url: item.image_url
                    }))}
                    setModalVisible={setModalVisible}
                    setModalImage={setModalImage}
                />
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        {modalImage ? <Image source={{uri: modalImage}} style={styles.modalImage} /> : <Text>No Image Available</Text>}
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    modalView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    modalImage: {
        width: 300, 
        height: 300
    }
});