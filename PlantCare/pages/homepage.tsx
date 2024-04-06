import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react'; // Don't forget to import React

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text> Hello world </Text>
            <Image
        style={styles.tinyLogo}
        source={require("../assets/plants.png")}
      />
                    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }, 

    tinyLogo: {
        width: 200,
        height: 200, 
}
} 
);

