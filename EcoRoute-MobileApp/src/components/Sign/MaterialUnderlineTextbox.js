import React, { useState } from 'react';
import { View, TextInput, Button, Alert,Text,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import the Eye icon from Expo Icons
import { useNavigation } from '@react-navigation/native';
const FormTab = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const handleFormSubmit = () => {
    if (!fullName || !email || !phoneNumber || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Form submission logic
    console.log('Form submitted:', { fullName, email, phoneNumber, password, isChecked });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <View style={{ marginTop: 20, width:"80%" }}>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
        
        
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth: 1, borderColor: '#ccc',}}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Use secureTextEntry based on showPassword state
           // Ensure TextInput takes remaining space
          style={styles.input1}
        />
        <FontAwesome
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          color="#000"
          onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
          style={{ marginRight: 8 }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:20 }}>
        <Checkbox
          isChecked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text>By signing up I agree to <Text style={{color:"rgba(97, 85, 223, 1)"}}>Terms & Conditions!</Text></Text>
      </View>
      <TouchableOpacity
                          onPress={()=>navigation.navigate("Login")}
                          style={{
                            backgroundColor: 'rgba(97, 85, 223, 1)', // Just for visibility, you can change or remove this
                            padding: 15, // Just for visibility, you can change or remove this
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            paddingLeft:10,
                            paddingRight:10,
                            width:350,
                            bottom:5,
                            marginTop:20
                          }}
                        >
                          <Text style={{
                            width:"auto",
                            fontSize:14,
                            fontWeight:"600",
                            color:"white"
                          }}>Create Account</Text>
                        </TouchableOpacity>
    </View>
  );
};

const Checkbox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop:2,
        borderColor: isChecked ? '#007bff' : '#ccc',
      }}>
        {isChecked && <View style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: '#007bff',
        }} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  input: {
    padding: 5,
    borderBottomWidth: 1,
    fontSize:15,
    marginTop:15,
    
    borderColor: '#ccc',
  },
  input1: {
    padding: 5,
    borderBottomWidth: 1,
    fontSize:15,
    marginTop:15,
    flex:1,
    
    borderColor: '#ccc',
  },
  button: {
    marginTop: 20,
  },
};

export default FormTab;
