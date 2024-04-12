import React, { useContext } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import PlantContext from '../context/plantscontext';
import { myPlant } from '../classes/myplants';

export default function PlantList() {
    const { plantList } = useContext<{
        plantList: myPlant[];
        setPlantList: React.Dispatch<React.SetStateAction<myPlant[]>>;
    }>(PlantContext);

    const renderItem = ({ item }: { item: myPlant }) => (
        
        <View>
            <Image source={{ uri: item.getPicture() }} style={{ width: 100, height: 100 }} />
            <Text>{item.getName()}</Text>
            <Text>{item.getDescritpion()}</Text>
        </View>
    );

    return (
        <View>
            <Text> Hallo Test </Text>
            {plantList && plantList[0] && <FlatList 
                data={plantList} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} />}        
                </View>
    );
}