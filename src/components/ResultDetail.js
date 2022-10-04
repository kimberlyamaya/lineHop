import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ResultsDetail = ({item}) => {
    return (
        <View>
            <Image style = {styles.image} source={{ uri: item.image_url}}/>
            <Text style = {styles.name} >{item.name}</Text>
            <Text style={{ marginHorizontal : 15, color : "red"}}>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>

    )

};

const styles = StyleSheet.create({
    image :{
        borderRadius : 6,
        height : 120,
        width : 250,
        marginLeft : 10,
        marginRight :2


    },

    name : {
        fontWeight : "bold",
        marginHorizontal : 15
        
    }

})

export default ResultsDetail;