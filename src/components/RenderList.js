import React from "react";
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultDetail";
import {withNavigation} from "react-navigation";


const RenderList = ({value, title, navigation}) => {

    if(value.length === 0) {
        return null;
    }

    return (
        <View style={{ marginVerical : 10 }}>
            <Text style={{marginLeft : 15, fontWeight : "bold", color : "blue", marginBottom :5}}>{title}</Text>
            
            <FlatList
            showsHorizontalScrollIndicator = {false}
            style = {{marginBottom : 5}}
            horizontal
            data={value}
            keyExtractor={result=> result.id}
            renderItem={({item}) => { 
                return(
            <TouchableOpacity onPress={() => navigation.navigate("results", {id : item.id})}>
                <ResultsDetail  item={item}/>
            </TouchableOpacity>); }} />
    </View>

    );
        
    

};


export default (RenderList);