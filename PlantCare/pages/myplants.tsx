import React, { useContext } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import PlantContext from '../context/plantscontext';
import { myPlant } from '../classes/myplants';

export default function PlantList() {
    const { plantList, setPlantList } = useContext(PlantContext);


    const renderItem = ({ item }: { item: myPlant }) => (
        <View style={styles.listElement}>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.getName()}</Text>
                <Text style={styles.itemDescription}>{item.getDescritpion()}</Text>
            </View>
            <Image source={{ uri: item.getPicture() }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            {plantList && plantList[0] && <FlatList  //Ich wollte hier die shared Plantlist nehmen, aber die Bilder konnten nicht angezeigt werden wenn ich sie übergebe, da sie wohl nicht als URI erkannt werden
                data={plantList} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} />}        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listElement: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#333",
        padding: 10,
        marginVertical: 5,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    itemName: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    itemDescription: {
        color: "#ddd",
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 50,
    }
});