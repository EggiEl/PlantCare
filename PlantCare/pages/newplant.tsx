import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput , StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {myPlant} from "../classes/myplants"
import PlantContext from '../context/plantscontext';
import Icon from 'react-native-vector-icons/FontAwesome';

const IMAGE_SIZE = 200;

export default function NewPlants() {
    const [image, setImage] = useState<string | null>(null);
    const [plantName, setPlantName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { plantList, setPlantList } = useContext(PlantContext);
    const [errorcolor, setErrorColor] = useState("red");

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
            setErrorColor("green");
            setErrorMessage("Plant created successfully.");
        }
        else {
            setErrorColor("red");
            setErrorMessage("Please fill in all fields.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Plant Name</Text>
            <TextInput style={styles.input} onChangeText={setPlantName} value={plantName} />
            <Text style={styles.label}>Plant Description</Text>
            <TextInput style={styles.input} onChangeText={setDescription} value={description} />
            <TouchableOpacity style={styles.iconContainer} onPress={selectImage}>
                <Icon name="camera" size={30} color="white" />
            </TouchableOpacity>
            {!image && <View style={styles.imagePlaceholder}></View>}
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity style={styles.button} onPress={addPlant}>
                <Text style={styles.buttonText}>Add Plant</Text>
            </TouchableOpacity>
            <Text style={{color: errorcolor,textAlign: 'center',marginTop: 10,}}> {errorMessage}</Text>
        </View>
    );  
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    iconContainer: {
        alignSelf: 'center', 
        backgroundColor: "rgba(12, 152, 105, 1)", 
        padding: 10, 
        borderRadius: 5, 
        marginVertical: 10,
    },
    imagePlaceholder: {
        alignSelf: 'center',  
        width: IMAGE_SIZE, 
        height: IMAGE_SIZE, 
        backgroundColor: "lightgray",
        marginVertical: 10,
    },
    image: {
        alignSelf: 'center', 
        width: IMAGE_SIZE, 
        height: IMAGE_SIZE,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "rgba(42, 171, 132, 1)",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: { 
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    
});