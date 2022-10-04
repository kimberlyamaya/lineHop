import React, {useState, useEffect} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {Text, View, FlatList, Image} from "react-native";
import yelp from "../api/Api"

const Results = ({navigation}) => {

    const[result, setResult] = useState(null);

   const id = navigation.getParam("id");

   const getResult = async (id) => {
       const {data} = await yelp.get(`/${id}`);
       setResult(data);
   }

   useEffect(() => {
       getResult(id);

   }, [])



    return (
         <>
            
       {result ? <FlatList 
       data={result.photos} 
       keyExtractor={(photo) => photo}
       renderItem = {({item}) => <Image style={{height : 200, width : 300}} source={{ uri : item}}/>} /> : <Text>Loading.....</Text> }

       </>
       
  

    );
    

};

export default Results;