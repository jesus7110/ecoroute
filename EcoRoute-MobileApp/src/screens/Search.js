import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text,  Image, Dimensions } from "react-native";
import { EvilIcons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import HeaderT from '../components/main/header'
import MapView from 'react-native-maps';
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { render } from "react-dom";
import { Marker } from 'react-native-maps';

function Search(props)  {
   

    const navigation = useNavigation();

 
    return (
        <>
        <View style={styles.container}>
            <HeaderT style={{ marginTop: 10 }} />
            
            <View style ={{backgroundColor:"#FFF",
        height:"100%",width:"100%"}}>
          {/* Mapview */}
          <MapView 
          initialRegion={{
            latitude: 30.7283423347583,
            longitude: 76.1696437950439,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          style={styles.map}>
            <Marker
  coordinate={{latitude: 30.7283423347583, longitude: 76.1696437950439}}
/>
          </MapView>
            </View>
           
         </View>
         <View style={{height:80,width:"100%",}}>
         <TouchableOpacity
         style={{ 
         backgroundColor: "black",
         borderRadius: 10,
         marginHorizontal:20,
         paddingHorizontal: 23,
         paddingVertical: 12,
         bottom:10,
         position:"absolute",
         
         
         width:"90%"
         }}
         onPress={()=>navigation.navigate("Search")}
         >    
         <View
                              source={require("../image/SIgnup.jpg")}
                              style={styles.featureBG1}
                              imageStyle={{ borderRadius: 15 }}
                            
                                    >
                                        <Text
                                            style={[
                                                styles.exclusiveAccessTo,
                                                styles.exclusiveAccessToTypo,
                                            ]}
                                        >
                                            Current Battery percentage : 
                                        </Text>
                                        <Text
                                            style={[
                                                styles.instantAlertFor,
                                                styles.instantAlertForTypo,
                                            ]}
                                        ><Text style={{color:"#50C878"}}>
                                            49</Text>
                                        </Text>
                                        <Image
                                            style={styles.skyscrapersIcon}
                                            contentFit="cover"
                                            source={require("../image/carl.jpeg")}
                                        />
                              
                            </View>
         </TouchableOpacity>
         </View>
         </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    bold1:{
        fontWeight:"500"
    },
    featureBG:{
        height: 170,
        width:"auto",
    },
    overlayText1: {
        paddingHorizontal: 15,
        
        textAlign:"center",
        fontSize: 11,
        backgroundColor:"rgba(97, 85, 223, 1)",
        opacity:1,
        fontWeight: "500",
        paddingTop: 5,
        paddingBottom: 6,
        color:"white",
        borderRadius: 5,
        marginLeft:10,
        position: 'absolute', // positions the text relative to the parent
        top: 20, // adjusts the text to the bottom of the image
      },
      map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:"black"
      },
      featureBG1:{
        height: 90,
        width:"auto",
    },
    exclusiveAccessTo: {
        width: 252,
        height: 20,
        letterSpacing: 0.2,
        top: 10,
      },
      instantAlertFor: {
        top: 40,
        width: 209,
        height: 50,
        // lineHeight: 6,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        fontSize: FontSize.size_xs,
        left: 74,
        letterSpacing: -0.2,
        textAlign: "center",
        color: Color.colorDimgray_300,
        position: "absolute",
      },
      skyscrapersIcon: {
        left: 14,
        height: 47,
        width: 47,
        top: 20,
        position: "absolute",
      },
      exclusiveAccessToTypo: {
        lineHeight: 20,
        fontSize: FontSize.size_mini,
        left: 74,
        fontFamily: FontFamily.interRegular,
        color: "white",
        textAlign: "left",
        width:240,
        height:50,
        fontWeight:"800"
      },
      instantAlertForTypo: {
        fontFamily: FontFamily.interLight,
        fontWeight: "800",
        fontSize:20
      },
    
});


export default Search;
