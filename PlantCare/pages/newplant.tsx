import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function NewPlants() {
    const [image, setImage] = useState<string | null>(null);

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)


        }
        


        
    }

    return (
        <View>
            <Text> Hallo </Text>
            <Button title="Select a plant picture" onPress={selectImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}