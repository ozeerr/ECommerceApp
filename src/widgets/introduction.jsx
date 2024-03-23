import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height, width } from '../utils/dimensions'
import { AppColors } from '../theme/color'
import { PRODUCT_LIST } from '../utils/routes'
import { useNavigation } from '@react-navigation/native'

const Introduction = () => {
  const navigation =useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
         <View>
          <Text style={styles.firstText}>20%  <Text style={styles.secondText}>Discount</Text></Text>
          <Text>on your first purchase</Text>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate(PRODUCT_LIST)} style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
         </TouchableOpacity>
         <View style={styles.imageWrapper}>
          <Image source={require("../assets/images/Green1.png")} style={styles.image}/>
         </View>
      </View>
    </View>
  )
}

export default Introduction

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  wrapper:{
    width:width*0.85,
    height:height*0.16,
    backgroundColor:"#EFEFEF",
    borderRadius:16,
    justifyContent:"center",
    gap:22,
    paddingLeft:30,
    marginVertical:10,
    shadowColor: AppColors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.60,
    shadowRadius: 7.49,
    
    elevation: 12,},
    firstText:{
      fontSize:30,
      fontWeight:"bold"
    },
    secondText:{
      fontSize:20,
      fontWeight:"bold"
    },
    buttonText:{
      color:AppColors.WHITE,
      fontWeight:"bold"
    },
    button:{
      width:110,
      backgroundColor:AppColors.PRIMARY,
      height:35,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:16},
      imageWrapper:{
        position:"absolute",
        right:0
      },
      image:{
        width:width*0.4,
        height:height*0.2
      }
    
})