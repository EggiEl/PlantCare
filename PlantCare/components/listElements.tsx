import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";

type ListItem = {
    id: number;
    name: string;
    description: string;
    image_url: string;
};

type ListProps = {
    data: ListItem[];
    setModalVisible?: (visible: boolean) => void;
    setModalImage?: (imageUrl: string | null) => void;
};

const SharedFlatList: React.FC<ListProps> = ({ data, setModalVisible, setModalImage }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={style.listElement}>
                    <View>
                        <Text style={style.itemName}>{item.name}</Text>
                        <Text style={style.itemDescription}>{item.description}</Text>
                    </View>
                    {setModalVisible && setModalImage && (
                        <TouchableOpacity onPress={() => {setModalVisible(true); setModalImage(item.image_url)}}>
                            <Image 
                                source={{uri: item.image_url}} 
                                style={{width: 100, height: 100}} 
                            />
                        </TouchableOpacity>
                    )}
                </View>
            )}
        />
    );
}

const style = StyleSheet.create({
    listElement : {
        flex: 1 , 
        flexDirection : "row" ,
        justifyContent : "space-between" ,
        backgroundColor : "black" , 
        padding : 10 ,
        borderColor: "white", 
        borderWidth : 1,
    }, 
    itemName : {
        color : "white" , 
        fontWeight : "bold", 
    } , 
    itemDescription : {
        color : "white" ,
    }
});

export default SharedFlatList;