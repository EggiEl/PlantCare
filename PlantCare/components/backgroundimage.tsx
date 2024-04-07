import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react'; // Don't forget to import React


const images = {
    image1: require('../assets/annie-spratt-8mqOw4DBBSg-unsplash.jpg'),
    image2: require('../assets/annie-spratt-hX_hf2lPpUU-unsplash.jpg'),
    image3: require('../assets/bart-zimny-W5XTTLpk1-I-unsplash.jpg'),
    image4 : require('../assets/annie-spratt-hX_hf2lPpUU-unsplash.jpg'),
    image5 : require('../assets/cleo-stracuzza-avA-YuEe2ZA-unsplash.jpg'),
    image6 : require('../assets/nahil-naseer-xljtGZ2-P3Y-unsplash.jpg')

};

interface BackgroundProps {
    pngsrc : keyof typeof images
}

export default function BackgroundImageBox({pngsrc} : BackgroundProps)  {
    return (
        <View style={styles.subcontainer}> 
            <Image
                style={styles.imagestyle}
                source={images[pngsrc]}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    subcontainer : { 
        width : "50%",  
        height: "33%", 
        borderColor: "black", 
        borderWidth : 1, 
        backgroundColor : "green"
    }, 
    imagestyle : {
        width : "100%", 
        height : "100%"
    }
});