import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { height, width } from '../../utils/dimensions'
import { AppColors } from '../../theme/color'
import { Code, Heart, Star } from 'iconsax-react-native'
import Button from '../../ui/button'
import Counter from '../../ui/counter'
import StoreContext from '../../context'

const ProductDetail = ({route}) => {
  const {addCart}=useContext(StoreContext)
  const {item}=route?.params
  return (
  <View style={screenStyle.container}>
  <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle}>
        <View style={styles.Imagewrapper}>
          <Image source={{uri:item?.image}} style={styles.ImageStyle}/>
        </View>
        <View style={styles.ContentWrapper}>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.categoryTextStyle}>{item?.category}</Text>
          <View style={styles.priceWrapper}><Text style={styles.priceStyle}>{item?.price}$</Text>
          <TouchableOpacity>
            <Heart size="30" color="red" variant="Bold"/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}><Star size="30" color={AppColors.YELLOW} variant="Bold"/><Text style={styles.rateText}>{item.rating.rate}</Text></View>
          <Text style={styles.descriptionStyle}>{item?.description}</Text>
        </View>
        <View style={{height:200}}></View>
    </ScrollView>
    <View style={styles.buttonWrapper}>
          <Counter/>
          <View style={{width:"70%"}}><Button title={"Add to basket"} onPress={()=>addCart(item)}/></View>
        </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  scrollViewStyle:{
    padding:10,
   
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
  rateText:{
    color:AppColors.YELLOW,fontSize:20,fontWeight:"bold"
  
  },
  buttonWrapper:{
    position:'absolute',bottom:40,width:width,flexDirection:"row",gap:10,alignItems:"center",justifyContent:"center",
    
  }
})