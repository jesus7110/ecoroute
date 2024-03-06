import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground,Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Header1 from '../components/main/header'

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleLogin = () => {
        // Check if email, phone, and password are valid and not empty
        if (!email ||  !password) {
            alert("Please fill in all fields");
            return;
        }

        // Check if email is valid
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Form submission logic
        // You can add your logic here for form submission
        console.log('Login information:', { email, password, rememberMe });
    };

    const isValidEmail = (email) => {
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <ImageBackground 
         source={require('../image/Login1.png')}
        style={styles.container}>
            <Header1/>
            <View style={styles.formContainer}>
            
            <Text style={styles.loremIpsum}>Login</Text>
            <Text style={styles.loremIpsum3}>Enter your credentials and get ready to explore</Text>
            <View style={{alignItems: "center",}}>
            <View style={styles.passwordContainer}>
            <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
            <TextInput
            
                style={styles.input}
                placeholder=" Your Email"
                value={email}
                onChangeText={setEmail}
            />
            </View>
            
            <View style={styles.passwordContainer}>
            <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.passwordInput}
                    placeholder=" Your Password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                    <MaterialIcons name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.rememberContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
                    {rememberMe && <MaterialIcons name="check-box" size={24} color="black" />}
                    {!rememberMe && <MaterialIcons name="check-box-outline-blank" size={24} color="black" />}
                </TouchableOpacity> 
                
                <Text>Remember me</Text>
                <TouchableOpacity style={{marginLeft:60,}}>
                    <Text style={{color:"rgba(97, 85, 223, 1)",fontWeight:"600",}}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
  <TouchableOpacity style={{
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Align children vertically
    width: "85%",
    justifyContent:"center",
    height: 45,
    borderColor: "rgba(97, 85, 223, 1)",
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20, // Add horizontal padding
  }}>
    <Image
      source={require("../image/goole.png")}
      style={{ height: 20, width: 20, marginRight: 5,marginLeft:7 }} // Adjust size and margin
    />
    <Text style={{ textAlign: "center",fontWeight:"600" }}>Login with Google</Text>
  </TouchableOpacity>
  <View style={{marginTop:50}}>
    <Text style={{ textAlign: "center" }}>Don’t have an account? <Text style={{ color:"rgba(97, 85, 223, 1)" }}>Sign up now</Text></Text>
  </View>
</View>
        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop:10
        
    },
    formContainer: {
        width: "85%",
        
        backgroundColor:"white",
        height:525,
        borderRadius:25,
        marginVertical:150
    },
    loremIpsum: {
        fontFamily: "roboto-500",
        color: "#121212",
        marginLeft:20,
        fontSize: 20,
        marginTop: 20,
        fontWeight:"700",
        
      },
    input: {
        width: "85%",
        height: 40,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        alignItems: "center",
        padding: 5,
        justifyContent:"center",
    
    fontSize:15,
    
    },
    passwordContainer: {
        flexDirection: "row",
        width: "85%",
        height: 40,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 10,
    },
    eyeIconContainer: {
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        marginBottom: 10,
        marginTop:5
    },
    checkbox: {
        marginRight: 5,
    },
    loginButton: {
        width: "85%",
        height: 45,
        backgroundColor: "rgba(97, 85, 223, 1)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop:15
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 15,
        marginBottom:35,
        // alignItems:"flex-start",
        // alignContent:"center",
        paddingBottom:20,
        width:"85%",
        marginLeft:20
        
      },
      icon:{
        marginRight:10,
        marginTop:4
      }
});

export default LoginForm;
