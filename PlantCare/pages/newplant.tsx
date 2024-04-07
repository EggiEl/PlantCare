import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function NewPlants() {
    const [image, setImage] = useState<string | null>(null);
    const [text, setText] = useState("")

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images 
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            


        }
    }
    
    const addPlant = () => {
        setImage(null) ; 
        setText(""); 

    }

    return (
        <View>
            <Text> Hallo </Text>
            <TextInput onChangeText={setText}>{text}</TextInput> 
            <Button title="Select a plant picture" onPress={selectImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <Button title="Add Plant" onPress={addPlant} />
        </View>
    );
}