import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput , StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {myPlant} from "../classes/myplants"
import PlantContext from '../context/plantscontext';

const IMAGE_SIZE = 200;

export default function NewPlants() {
    const [image, setImage] = useState<string | null>(null);
    const [plantName, setPlantName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { plantList, setPlantList } = useContext(PlantContext);

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
            <Text>Plant Name</Text>
            <TextInput onChangeText={setPlantName} value={plantName} />
            <Text>Plant Description</Text>
            <TextInput onChangeText={setDescription} value={description} />
            <TouchableOpacity style={styles.TouchableOpacity}  onPress={selectImage} >
            <Text style = {styles.Text}> Plant Image </Text>
            </TouchableOpacity>
            {!image &&<View style={{alignSelf :'center',  width: IMAGE_SIZE, height: IMAGE_SIZE, backgroundColor: "lightgray" }}></View>}
            {image && <Image source={{ uri: image }} style={{alignSelf :'center', width: IMAGE_SIZE, height: IMAGE_SIZE }} />}
            <TouchableOpacity style = {styles.TouchableOpacity}  onPress={addPlant} >
            <Text style = {styles.Text}>Add Plant</Text>
            </TouchableOpacity>
            <Text> {errorMessage}</Text>
        </View>
    );  
}


const styles = StyleSheet.create({ 
    TouchableOpacity: {
        backgroundColor: "rgba(42, 171, 132, 1)",
        color: "black",
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 300,
        alignSelf: "center"
        
        
    }, 
    Text: { 
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    }
});