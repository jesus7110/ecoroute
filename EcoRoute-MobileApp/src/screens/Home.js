import React from 'react'
import {View, Text, Image, ImageBackground , StyleSheet} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

import Ionicons from "react-native-vector-icons/Ionicons"
import HeadSection from "../components/main/mainsectionU"


const Home = ({navigation}) => {
    const NearByRoom = [{
      "place":"Chandigarh University",
      "imageUrl":"../image/SampleImage.png"
    }
      ]
    
    const handleSearch = () => {
        // Handle search functionality here
        alert("Search button clicked!");
    }
    return(
      <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
         
          <HeadSection/>
           <LinearGradient
              colors={["#50C878", "transparent"]}
               style={{
                left:0,
                right:0,
                height:10,
                marginTop:-3
               }}
              >
               
            </LinearGradient>
           <View style ={{backgroundColor:"#FFF",
        height:350,alignContent:"center",paddingLeft:14}}>
            <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                //    
                   marginTop:20,
                   marginLeft:30,
                   width:"100%"
                  }}>
                   
                </View>    


               

            
        
                
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("#")}
                        style={styles.cardFindRoom}
                    >
                        <ImageBackground
                              source={require("../image/j2.jpeg")}
                              style={styles.imageBackground}
                              imageStyle={{ borderRadius: 15 }}
                            >
                              <Text style={styles.overlayText}>
                                Plan Trip
                              </Text>
                            </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Plan")}
                        style={styles.cardFindRoom}
                    >
                        <ImageBackground
                              source={require("../image/j1.jpg")}
                              style={styles.imageBackground}
                              imageStyle={{ borderRadius: 15 }}
                            >
                              <Text style={styles.overlayText}>
                                Near By location
                              </Text>
                            </ImageBackground>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Search")}
                        style={styles.cardFindRoom}
                    >
                        <ImageBackground
                              source={require("../image/j3.jpeg")}
                              style={styles.imageBackground}
                              imageStyle={{ borderRadius: 15 }}
                            >
                              <Text style={styles.overlayText}>
                                Vehicle Info
                              </Text>
                            </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Search")}
                        style={styles.cardFindRoom}
                    >
                        <ImageBackground
                              source={require("../image/j4.jpeg")}
                              style={styles.imageBackground}
                              imageStyle={{ borderRadius: 15 }}
                            >
                              <Text style={styles.overlayText}>
                                Battery Effeciency 
                              </Text>
                            </ImageBackground>
                    </TouchableOpacity>

                    </View>

                    

                    
              </View>          

                


               
{/* working on the featured section */}

{/* working on the Hand Picked section end */}


{/* working on the Hand Picked section end */}

{/* exclusive prime*/ }
<View style ={{backgroundColor:"black",
        height:300,top:20}}>
         
      {/* // working on main heading */}
      <Image
                                            style={styles.king}
                                            contentFit="cover"
                                            source={require("../image/l2.jpeg")}
                                        />
      <Text style={[styles.bachelorcavePrime, styles.areYouATypo]}>
                                        Get You Car Info
                                    </Text>
                                    
      


               

            
        
               
                    
                    <View 
                        
                        style={{
                            height:90,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:55,
                            marginTop:70,
                            borderRadius:15,
                            marginBottom:10,
                            width:320
                        }}
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
                            
                                        
                    </View>
                    
                    

                
                <View style={{ marginTop:20 ,marginBottom:30,alignItems:"center"}}>
        
                        <TouchableOpacity
                          onPress={() => {
                            // Add functionality for when TouchableOpacity is pressed
                            console.log("Explore BachelorCave Prime pressed");
                          }}
                          style={{
                            backgroundColor: '#50C878', // Just for visibility, you can change or remove this
                            padding: 15, // Just for visibility, you can change or remove this
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            paddingLeft:10,
                            paddingRight:10,
                            width:350,
                            bottom:5
                          }}
                        >
                          <Text style={{
                            width:"auto",
                            fontSize:14,
                            fontWeight:"600",
                            color:"white"
                          }}>Get Total Car Info</Text>
                        </TouchableOpacity>
    </View>  
              </View>
       




</ScrollView>
    )
}
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:10,
    marginLeft:5
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
searchIcon: {
    padding: 10,
    
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
    imageBackground: {
      height: '100%',
      width: '100%',
    },
    discoverAPlaceTypo: {
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      position: "absolute",
  },
  vectorIconLayout: {
    width: 9,
    maxHeight: "40%",
    left: 3,
    position: "absolute",
},
seamlessSupportEvenPosition: {
  left: 98,
  textAlign: "left",
  position: "absolute",
},
homePosition: {
  left: 33,
  position: "absolute",
},
circle:{
  backgroundColor:"#0C132A",
  borderRadius:100,
  height:35,
  width:"8%",
  marginTop:-5,
  
  padding:15,
},
    featureBG:{
        height: 170,
        width:"auto",
    },
    featureBG1:{
      height: 90,
      width:"auto",
  },
    seeAllTypo: {
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
  },
    frameBg: {
      backgroundColor: Color.colorRoyalblue_100,
      position: "absolute",
  },
    overlayText: {
      paddingHorizontal: 15,
      fontSize: 11,
      color: "white",
      fontWeight: "700",
      paddingTop: 3,
      paddingBottom: 8,

      borderRadius: 15,
      position: 'absolute', // positions the text relative to the parent
      bottom: 0, // adjusts the text to the bottom of the image
    },
    roomForRentLayout: {
      lineHeight: 19,
      textAlign: "left",
      position: "absolute",
  },
  roomForRent: {
    fontSize: FontSize.size_mini_1,
    color: Color.colorBlack,
    left: 9,
    top: 175,
    letterSpacing: -0.3,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
},
bSector23: {
  top: 195,
  letterSpacing: -0.1,
  color: Color.colorDimgray_100,
  width: 191,
  lineHeight: 11,
  fontSize: FontSize.size_4xs_2,
  left: 9,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  textAlign: "left",
  position: "absolute",
},
icbaselineBedIcon: {
  top: 210,
  left: 9,
  overflow: "hidden",
},
text: {
  left: 30,
  top: 213,
  letterSpacing: -0.2,
  lineHeight: 11,
  fontSize: FontSize.size_4xs_2,
  color: Color.colorBlack,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  textAlign: "left",
},
text1: {
  left: 68,
  top: 213,
  letterSpacing: -0.2,
  lineHeight: 11,
  fontSize: FontSize.size_4xs_2,
  color: Color.colorBlack,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  textAlign: "left",
},
solarbathBoldIcon: {
  top: 213,
  left: 49,
  width: 13,
  height: 13,
  overflow: "hidden",
  position: "absolute",
},
text2: {
  left: 240,
  color: Color.colorDarkslategray_100,
  top: 190,
  fontFamily: FontFamily.interBold,
  fontWeight: "700",
  lineHeight: 13,
  fontSize: FontSize.size_2xs_2,
  letterSpacing: -0.2,
  textAlign: "left",
  position: "absolute",
},
frameChild: {
  top: 185,
  left: 260,
  borderRadius: 1,
},
text3: {
  top: 210,
  color: Color.colorDimgray_200,
  left: 240,
},
frameChildLayout1: {
  height: 17,
  width: 17,
  position: "absolute",
},
textPosition: {
  letterSpacing: -0.2,
  position: "absolute",
},
text3Typo: {
  fontSize: 15,
  lineHeight: 19,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  letterSpacing: -0.3,
  textAlign: "left",
  position: "absolute",
},
bachelorcavePrime: {
  left: 64,
  color: "#50C878",
  lineHeight: 23,
  top: 23,
  fontFamily: FontFamily.interBold,
  fontWeight: "700",
},
oneMembershipMany: {
  top: 50,
  fontSize: FontSize.size_sm,
  letterSpacing: 0.3,
  left: 28,
  fontFamily: FontFamily.interRegular,
  color: Color.colorWhite,
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
king:{
  left: 26,
  height: 20,
  width: 25,
  top: 24,
  position: "absolute",
},
exclusiveAccessToPremiumPrParent: {
  left: 26,
},
frameChild7: {
  top: 35,
  left: 206,
  width: 211,
},
contactOwnerDirectly: {
  top: 68,
  width: 140,
  lineHeight: 16,
  fontFamily: FontFamily.interLight,
  fontWeight: "300",
  fontSize: FontSize.size_xs,
  left: 74,
  letterSpacing: -0.2,
  textAlign: "left",
  color: Color.colorDimgray_300,
  position: "absolute",
},
viewContactNumber: {
  top: 10,
  width: 244,
  letterSpacing: -0.3,
},
callMaleIcon: {
  top: 15,
  height: 35,
  width: 41,
},
contactOwnerDirectlyParent: {
  left: 374,
},
frameChild8: {
  left: 32,
  borderRadius: Border.br_mid,
  width: 379,
  height: 42,
  top: 235,
},
frameChildLayout: {
  height: 106,
  position: "absolute",
},
exploreBachelorcavePrime: {
  top: 245,
  left: 114,
  fontSize: FontSize.size_base_5,
  lineHeight: 21,
  color: Color.colorWhite,
  letterSpacing: -0.3,
  textAlign: "left",
  position: "absolute",
},
frameChild9: {
  backgroundColor: Color.colorLightcyan,
  height: 658,
  width: 444,
  left: 0,
  top: 0,
  position: "absolute",
},
rentalsMadeEfficient: {
  color: Color.colorDarkslategray_200,
},
text16: {
  color: Color.colorBlack,
},
bachelorsCave: {
  color: Color.colorDarkorange,
},
rentalsMadeEfficientContainer: {
  top: 79,
  lineHeight: 32,
  letterSpacing: 0.2,
  left: 55,
  fontFamily: FontFamily.interSemiBold,
  fontWeight: "600",
},
bookAccommodationOnline: {
  top: 156,
  left: 44,
  lineHeight: 18,
  textAlign: "center",
  width: 357,
  letterSpacing: 0.1,
  color: Color.colorDarkslategray_200,
  fontSize: FontSize.size_smi,
  fontFamily: FontFamily.interRegular,
},
frameIcon: {
  top: 188,
  left: 77,
  width: 300,
  height: 346,
  position: "absolute",
},
listProperty1: {
  top: 7,
  color: Color.colorRoyalblue_100,
  width: 79,
  height: 14,
  fontSize: FontSize.size_smi,
  lineHeight: 13,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  textAlign: "left",
  letterSpacing: -0.3,
},
listPropertyWrapper: {
  top: 21,
  width: 108,
  height: 28,
  left: 262,
},
areYouA: {
  width: 192,
  height: 21,
  color: Color.colorWhite,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  lineHeight: 17,
  left: 0,
  top: 0,
},
findFaster: {
  width: 178,
  top: 25,
},
payZeroBrokerage: {
  top: 38,
  width: 128,
},
vectorIcon: {
  top: 37,
  bottom: 5,
},
vectorIcon1: {
  bottom: 16,
  top: 26,
},
frameGroup: {
  height: 49,
  left: 0,
  top: 0,
},
frameContainer: {
  top:130,
  left: 34,
  height: 50,
},
frameWrapper: {
  top: 600,
  height: 200,
  left: 1,
  width: 444,
},
seamlessSupportEven: {
  fontSize: FontSize.size_base,
  lineHeight: 22,
  top: 25,
  color: Color.colorDarkslategray_200,
  letterSpacing: 0.2,
  fontFamily: FontFamily.interSemiBold,
  fontWeight: "600",
},
ourMultilingualExpert: {
  top: 90,
  width: 239,
  letterSpacing: 0.1,
  fontFamily: FontFamily.interLight,
  fontWeight: "300",
  lineHeight: 15,
  fontSize: FontSize.size_2xs,
  color: Color.colorDimgray_200,
},
supportsite1Icon: {
  width: 40,
  height: 40,
  top: 22,
},
frameChild10: {
  left: 145,
  backgroundColor: Color.colorGray_300,
  width: 101,
  borderRadius: Border.br_9xs,
  top: 190,
},
findOutMore: {
  left: 155,
  letterSpacing: 0.1,
  fontSize: FontSize.size_xs,
  color: Color.colorWhite,
  top: 200,
  lineHeight: 17,
  textAlign: "left",
  fontFamily: FontFamily.interSemiBold,
  fontWeight: "600",
  position: "absolute",
},
seamlessSupportEvenAfterBParent: {
  top: 478,
  marginHorizontal:25,
  alignContent:"center",
  alignItems:"center",
  shadowRadius: 4,
  elevation: 4,
  width: 380,
  height: 243,
  shadowOpacity: 1,
  overflow:"visible",
  
  shadowOffset: {
      width: 0,
      height: -2,
  },
  shadowColor: "rgba(0, 0, 0, 0.25)",
},
rectangleParent: {
  top: 297,
  height: 622,
  width: 444,
  left: 0,
  position: "absolute",
},
frame5: {
  width: 712,
  left: 0,
  top: 0,
},
frame4: {
  top: 1158,
  left: -1,
  width: 733,
},
landing: {
  marginLeft: -222,
  borderRadius: Border.br_18xl,
  height: 2347,
  backgroundColor: Color.colorWhite,
  width: 444,
  overflow: "hidden",
  top: 0,
},
frameParent: {
  left: 21,
  width: 444,
  top: 0,
  position: "absolute",
  height: 2362,
},
frame: {
  width: 465,
  overflow: "hidden",
  left: 0,
  top: 0,
  position: "absolute",
  height: 2362,
},
findRoomNear: {
  left: 53,
  fontSize: FontSize.size_2xl,
  lineHeight: 28,
  width: 381,
  textAlign: "left",
  color: Color.colorDimgray_300,
  fontFamily: FontFamily.interSemiBold,
  fontWeight: "600",
  letterSpacing: -0.5,
  top: 0,
},
frame6: {
  top: 343,
  width: 434,
  overflow: "hidden",
  left: 0,
},
rectangleIcon: {
  left: 36,
  width: 179,
  borderRadius: Border.br_8xs,
  height: 94,
  top: 0,
},
frame8: {
  width: 215,
  overflow: "hidden",
  left: 0,
  top: 0,
},
frameChild11: {
  left: 223,
  width: 179,
  borderRadius: Border.br_8xs,
  height: 94,
  top: 0,
},
frame9: {
  width: 402,
  overflow: "hidden",
  left: 0,
  top: 0,
},
punjabUniverstyChandigarh: {
  left: 57,
  top: 0,
},
frame10: {
  width: 204,
},
chandigarhUniversty1: {
  left: 252,
  top: 0,
},
frame11: {
  width: 361,
},
circledMenu: {
  left: 143,
  width: 96,
  top: 0,
},
frame12: {
  top: 848,
  width: 239,
  overflow: "hidden",
  left: 0,
},
teenyiconshomeSolid: {
  top: 17,
  left: 35,
  width: 25,
  height: 25,
  overflow: "hidden",
  position: "absolute",
},
frameChild12: {
  top: 73,
  width: 38,
  left: 28,
},
areYouATypo: {
  fontSize: FontSize.size_mid,
  letterSpacing: -0.3,
  textAlign: "left",
  position: "absolute",
},
parentLayout: {
  height: 93,
  width: 338,
  top: 115,
  borderRadius: Border.br_6xs,
  backgroundColor: Color.colorWhite,
  position: "absolute",
},
exclusiveAccessToTypo: {
  lineHeight: 20,
  fontSize: FontSize.size_mini,
  left: 74,
  fontFamily: FontFamily.interRegular,
  color: Color.colorDarkslategray_100,
  textAlign: "left",
  width:240,
  height:50
},
instantAlertForTypo: {
  fontFamily: FontFamily.interLight,
  fontWeight: "800",
  fontSize:20
},
callMaleIconPosition: {
  left: 15,
  position: "absolute",
},
frameChild10Layout: {
  height: 36,
  position: "absolute",
},
frameLayout1: {
  width: 370,
  position: "absolute",
},
listPropertyWrapperLayout: {
  borderRadius: Border.br_6xs,
  backgroundColor: Color.colorWhite,
  position: "absolute",
},
findFasterTypo: {
  height: 11,
  lineHeight: 8,
  fontSize: FontSize.size_5xs,
  left: 19,
  fontFamily: FontFamily.interRegular,
  color: Color.colorWhite,
  letterSpacing: -0.2,
  textAlign: "left",
  position: "absolute",
},
home: {
  top: 49,
  color: Color.colorWhite,
  lineHeight: 13,
  fontFamily: FontFamily.interMedium,
  fontWeight: "500",
  textAlign: "left",
  fontSize: FontSize.size_2xs_2,
  left: 33,
  letterSpacing: -0.2,
},
search1: {
  left: 0,
},
groupIcon: {
  width: "90%",
  right: "6.67%",
  left: "3.33%",
  bottom: "55%",
  top: "0%",
  height: "45%",
  maxWidth: "100%",
},
searchParent: {
  left: 116,
  width: 30,
},
saved: {
  left: 1,
},
vectorIcon2: {
  right: "0%",
  left: "0%",
  bottom: "55%",
  top: "0%",
  height: "45%",
  maxWidth: "100%",
  width: "100%",
},
vectorIcon3: {
  height: "16.67%",
  width: "29.63%",
  top: "25%",
  right: "7.41%",
  bottom: "58.33%",
  left: "62.96%",
},
savedParent: {
  left: 255,
  width: 27,
},
teenyiconshomeSolidParent: {
  borderRadius: Border.br_3xl,
  backgroundColor: Color.colorGray_400,
  width: 339,
  height: 80,
  overflow: "hidden",
  top: 0,
},
frameChild13: {
  top: 19,
  width: 46,
  height: 46,
},
frameChild14: {
  left: 380,
  width: 80,
  height: 80,
  top: 0,
  position: "absolute",
},
image4Icon: {
  borderRadius: 52,
  width: 53,
  height: 55,
},
frameChild15: {
  width: 14,
  height: 14,
},
frameParent2: {
  height: 80,
  top: 0,
},
frameChild16: {
  width: "50%",
  right: "27.78%",
  left: "22.22%",
  bottom: "55%",
  top: "0%",
  height: "45%",
  maxWidth: "100%",
},
listPropertyParent: {
  left: 212,
  width: 54,
},
frameParent1: {
  top: 1874,
  height: 80,
},
heartOutline: {
  left: 91,
  width: 24,
  overflow: "hidden",
  top: 0,
},
frame13: {
  top: 1559,
  width: 115,
  overflow: "hidden",
  left: 0,
},
frame7: {
  height: 1954,
  top: 386,
  overflow: "hidden",
},
hero: {
  flex: 1,
  height: 2362,
  width: "100%",
},
cardFindRoom:{
  
    height:125,
    elevation:2,
    backgroundColor:"#FFF",
    marginLeft:15,
    marginTop:20,
    borderRadius:15,
    marginBottom:10,
    width:180,
    

}
  });
export default Home;