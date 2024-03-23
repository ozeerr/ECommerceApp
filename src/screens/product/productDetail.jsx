import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { height, width } from '../../utils/dimensions'
import { AppColors } from '../../theme/color'
import { Heart } from 'iconsax-react-native'
import Button from '../../ui/button'

const ProductDetail = ({route}) => {
  const {item}=route?.params
  return (
  <View style={screenStyle.container}>
  <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.Imagewrapper}>
          <Image source={{uri:item?.image}} style={styles.ImageStyle}/>
        </View>
        <View style={styles.ContentWrapper}>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.categoryTextStyle}>{item?.category}</Text>
          <View style={styles.priceWrapper}><Text style={styles.priceStyle}>{item?.price}$</Text><TouchableOpacity>
            <Heart size="30" color="red" variant="Bold"/>
            </TouchableOpacity></View>
          <Text style={styles.descriptionStyle}>{item?.description}</Text>
        </View>
    </ScrollView>
    <View style={styles.buttonWrapper}>
          <Button title={"Satın Al"} onPress={()=>console.warn("calisti")}/>
        </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  scrollViewStyle:{
    padding:10
  },
  Imagewrapper:{
    height:height*0.5,borderWidth:0.2,alignItems:"center",justifyContent:"center",borderColor:AppColors.PRIMARY,padding:10
  },
  ImageStyle:{
    width:"100%",height:"100%",objectFit:"contain"
  },
  ContentWrapper:{
    marginTop:10,gap:5
  },
  titleStyle:{
    fontWeight:"bold",fontSize:20
  },
  categoryTextStyle:{
    fontWeight:"bold",fontSize:15,color:"gray"
  },
  priceWrapper:{
    flexDirection:"row",justifyContent:"space-between",alignItems:"center"
  },
  priceStyle:{
    fontWeight:"bold",fontSize:18
  },
  descriptionStyle:{
    fontWeight:500,fontSize:15,marginTop:20
  },
  buttonWrapper:{
    position:'absolute',bottom:40,width:width,justifyContent:"center",alignItems:"center",paddingHorizontal:30
  }
})