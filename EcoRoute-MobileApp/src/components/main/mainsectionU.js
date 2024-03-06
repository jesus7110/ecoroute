import React from 'react'
import {View, Text, Image, ImageBackground , StyleSheet} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"



const HeadSection1 = (props) => {
    const NearByRoom = [{
        "place":"Chandigarh University",
        "imageUrl":"../image/SampleImage.png"
      }
        ]
      
      const handleSearch = () => {
          // Handle search functionality here
          alert("Search button clicked!");
      }
      const navigation = useNavigation();
    return(

<View style={{
               
    backgroundColor:"rgba(16, 12, 8, 1)",
    height:275,
    
    paddingHorizontal:20
    }}>
  <View style={{
        flexDirection:"row",
        alignItems:"center",
        marginTop:40,
        width:"100%",
        height: 30
       }}>
  
     
         <View style={{
             height:'100%',
             width:'80%',
             marginTop:25,
             marginLeft:15,
             flexDirection:"row",
         }}>
        <Text style={{color:"white", fontWeight:"500",color:"#AAFF00",fontSize:15}}>Good Morning Salvin ! </Text>
        <View style={styles.circle}>

<Image 
source={require('../../image/j1.jpg')}
style={{borderRadius:20,height:25,width:25,marginTop:-8,marginLeft:-10}}
/>

</View>

         </View>
         

         <View style={{ width:"85%",alignItems:"flex-end"}}>
             <View style={{
                    flexDirection:"row",
                     alignItems:"center",
                      marginTop:15,
                    
                     height: 30
                    }}>
              
             
             </View>
             
        </View>
    </View>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,
        width:"100%"
       }}>
        <View style={{width:"55%"}}>
             <Text style={{
                 fontSize:15,
                 color:"#FFF",
                 marginLeft:8,
                 width:"55",
                 
             }}>A New Travel Route planner  </Text>
             <Text style={{
                 fontSize:12,
                 fontWeight:'600',
                 color:"#FFF",
                 marginLeft:8,
                 width:"55"
             }}>You will love to use our application</Text>
            
        </View>
        
        <View style={{width:"35%", alignItems:"flex-end" , marginRight:30}}>
             <Image
                  source={require("../../image/car.png")}
                 style={{height:120,width:120}}
             />
        </View>
      </View>

      <View style={{
alignItems: 'center',
borderRadius: 15,
marginTop: 25,
flexDirection: "row",
alignItems: "center"
}}>


</View>



</View>

    )}
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
      searchIcon: {
          padding: 10,
          
      },
      circle:{
        backgroundColor:"#0C132A",
        borderRadius:100,
        height:35,
        width:"8%",
        marginTop:-5,
        marginLeft:10,
        padding:15,
      },
    });

export default HeadSection1;