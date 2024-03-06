import React from 'react';
import { View, Image, TouchableOpacity,Text,StyleSheet,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { useNavigation } from '@react-navigation/native';
import Color from '../../Utils/Colors'
import EvilIcons from "react-native-vector-icons/EvilIcons"
const YourComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={{
      height: 150,
      paddingTop:5
      
      
      
      
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        
        width: "100%",
        height: 100,
        paddingBottom:15,
        
        borderColor:"#50C878",
        backgroundColor:"black",
        borderBottomWidth:1.5,
        
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color="white"
                size={24}
                style={{marginTop:16,marginLeft:20,marginRight:10}}
              />
            </TouchableOpacity>
            <View style={{
alignItems: 'center',
borderRadius: 15,
marginTop: 25,
flexDirection: "row",
alignItems: "center"
}}>
<View style={styles.searchSection}>
<EvilIcons name="location" size={20} color='black' style={styles.searchIcon} />
<TextInput
placeholder="Street, city..."
style={{
paddingVertical: 5,

marginRight:-6,
borderRadius: 50,
fontSize: 12,
backgroundColor: "#FFF",
width: "92%"
}}
/>
</View>
</View>


        
       
      </View>
  <View style={{flexDirection:"row" , marginTop:3, width:"90%",alignContent:"center",justifyContent:"center"}}>
 <TouchableOpacity style={{marginHorizontal:10}}>
  <Text>Verified</Text>
 </TouchableOpacity >
 <TouchableOpacity style={{marginHorizontal:10}}>
  <Text>Charger Type</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{marginHorizontal:10}}>
  <Text>Kw Range</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{marginHorizontal:10}}>
  <Text>Online</Text>
 </TouchableOpacity>
 
</View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchSection: {
    width:"90%",
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#50C878',
    borderRadius:50,
    marginLeft:5
},})

export default YourComponent;
