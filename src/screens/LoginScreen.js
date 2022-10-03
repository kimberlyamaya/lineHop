import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { auth } from './firebase';



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
           style={styles.input}
           />
             <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text) }
           style={styles.input}
           secureTextEntry={true}
           />
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => { }}
                styles={styles.button}
                >
                    <Text style={[styles.buttonText, styles.button]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignup}
                styles={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#da3743',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderWidth: 2,
    
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
    buttonOutlineText: {
        fontWeight: '700',
        fontSize: 16,
        
    },
})
