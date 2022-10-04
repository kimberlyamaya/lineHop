import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { auth } from './firebase';



const LoginScreen = () => {
      
    const[email,setEmail] = useState()
    const[password,setPassword] =useState()
    function handleSignUp(email,password,displayName){
        auth
        createUserWithEmailAndPassword(email, password).then(function(value) {
            console.log(value);
            }).catch(function(error) {
                console.log(error);
            });
    }
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding">
    <View style={styles.inputContainer}>
        <TextInput 
            value ={email}
            defaultValue={''}
            onChangedText={(text)=>setEmail(text)}
            style = {styles.input}
            placeholder="Email"
        />
        <TextInput
            value ={password}
            defaultValue={''}
            onChangedText={(text)=>setPassword(text) }
            style = {styles.input}
            placeholder="Password"
            secureTextEntry
        />
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity
        onPress={()=>{}}
        style = {styles.loginButton}
    >
        <Text styles = {styles.buttonText}>Log in</Text>    
    </TouchableOpacity>
    <TouchableOpacity
        onPress={handleSignUp}
        style = {styles.registerButton}
    >
        <Text styles = {styles.buttonText}>Register</Text>    
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        borderColor:'#ADD8E6',
        borderWidth:2,
        padding:5,
        margin:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    inputContainer:{
        width:'75%'    
    },
    buttonContainer:{
        width:'100%',
        backgroundColor:'#CCCCFF',  
        alignItems:'center'
    },
    loginButton:{
        borderRadius:10,
        width:'50%',
        backgroundColor:'#dca4c3',
        height:40,
        padding:5,
        textAlignVertical:'center',
        alignItems:'center',
        borderWidth:3,
        marginTop:10
    },  
    buttonText:{
        color:'white',
        fontWeight:'800',
        fontSize:8
    },
    registerButton:{
        borderRadius:10,
        backgroundColor:'#dca4c3',
        width:'50%',
        height:40,
        padding:5,
        textAlignVertical:'center',
        alignItems:'center',
        borderWidth:3,
        marginTop:10
    },
})