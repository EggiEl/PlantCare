import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react'; // Don't forget to import React
import BackgroundImageBox from "../components/backgroundimage";






export default function HomeScreen() {



    return (
        <View style = {styles.container}>
            <View style = {styles.textcontainer}>
            <Text style = {styles.textstyle}> Welcome to PlantCare </Text>
            <Text style = {styles.textstyle1}> Keep track of watering schedules and care routines for your plants </Text>

            </View>
           

        <BackgroundImageBox pngsrc="image1" /> 
        <BackgroundImageBox  pngsrc="image2" /> 
        <BackgroundImageBox pngsrc= "image3"	/> 
        <BackgroundImageBox pngsrc= "image4"  /> 
        <BackgroundImageBox pngsrc="image5"/> 
        <BackgroundImageBox pngsrc="image6"/> 



        </View> 

        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexWrap : "wrap"
    }, 
    textstyle : {
        fontWeight : "bold", 
        color :"white" , 
        fontSize: 60,
        textAlign:"center", 
        
    },
    textstyle1 : {
        marginTop: 20, 
        fontWeight : "bold", 
        color :"white" , 
        fontSize: 20,
        textAlign:"center", 
        
    },
    textcontainer: {
        flex : 1 , 
        alignContent : "center", 
        marginTop : "50%" , 
        marginLeft :"10%" , 
        position : "absolute" , 
        zIndex : 100, 
        backgroundColor : "rgba(0, 0, 0, 0.5)" , 
        borderBlockColor: "black", 
        borderWidth : 5,
        opacity: 1
    }
});

