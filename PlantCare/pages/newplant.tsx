import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {myPlant} from "../classes/myplants"

const IMAGE_SIZE = 200;

export default function NewPlants() {
    const [image, setImage] = useState<string | null>(null);
    const [plantName, setPlantName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [plantList, setPlantList] = useState<myPlant[]>([]);

    const selectImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images 
            });
            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            setErrorMessage("An error occurred while selecting the image.");
        }
    }
    
    const addPlant = () => {
        if (image && plantName && description ) {
            const newPlant = new myPlant(plantName, description, image);
            setPlantList(prevPlantList => [...prevPlantList, newPlant]);
            setImage(null);
            setPlantName("");
            setDescription("");
            setErrorMessage("Plant created successfully.");
        }
        else {
            setErrorMessage("Please fill in all fields.");
        }
    }

    return (
        <View>
            <Text> Plant Name </Text>
            <TextInput onChangeText={setPlantName} value={plantName} />
            <Text> Plant Description </Text>
            <TextInput onChangeText={setDescription} value={description} />
            <Button title="Select a plant picture" onPress={selectImage} />
            {image && <Image source={{ uri: image }} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }} />}
            <Button title="Add Plant" onPress={addPlant} />
            <Text> {errorMessage}</Text>
            {plantList[0] && <Text> {plantList[0].getName()} </Text>}   
        </View>
    );
}