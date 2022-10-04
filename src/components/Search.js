import React, { useEffect } from "react"; 
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { DotIndicator } from 'react-native-indicators'
import { SearchBar } from "react-native-elements";
import { useState } from "react";
import useResults from "../hooks/useResults";
import RenderList from "../components/RenderList"


const SearchScreen = () => {
   const [search , setSearch] = useState("");
   const[searchApi, results, errormessage ,  loading] = useResults();
  
   

    useEffect( () => {

        console.log(search);

       

      const app =  () => {
          
         
   search === '' ?  searchApi('pasta') :  searchApi(search);

 
 }


       app();

       //

       //searchApi('pizza');
    
    
    }, [search]);



    const filterByPrices= (price) => {
      return results.filter(result => {
        return result.price === price;
        });
    }
      
   
    return (
        
        <>
           
            <SearchBar 
            
             placeholder="Type Here..."
        onChangeText={(value) => {
           setSearch(value);
            //searchApi(value);
        } }
        value={search} 
        round
        lightTheme
        cancelIcon
        onEndEditing = {() => searchApi(search)}
         />

        {errormessage ? <Text style={{marginLeft : 15}}>{errormessage}</Text> : null }
       {results.length >= 0 && !loading?  <Text style={{marginLeft : 15, marginBottom : 10, fontWeight : "bold", color : "red"}}>We have found {results.length} results!</Text> : null}
        

        {loading  ? <View ><DotIndicator color='orange' /></View>  :  <ScrollView>
          <RenderList value={filterByPrices("$")} title="Cost Effective"  />  
           <RenderList value={filterByPrices("$$")} title="Bit Pricier"  />
       <RenderList value={filterByPrices("$$$")} title="Big Spender" />

        </ScrollView>} 

      

        
        
    
        
        </>
     

    );





};

const styles = StyleSheet.create({
    search : {
        marginBottom : 15,
        borderRadius : 10

    },

    back : {
     flex : 1

    }
    

})

export default SearchScreen;