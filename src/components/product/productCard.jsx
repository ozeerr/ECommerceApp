import { Image, StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native'
import React from 'react'
import { Heart, MedalStar } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'
import { width } from '../../utils/dimensions'
import { PRODUCT_DETAIL } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
import Button from '../../ui/button'

const ProductCard = ({product}) => {
    const navigation=useNavigation()
  return (
    <Pressable onPress={()=>navigation.navigate(PRODUCT_DETAIL)} style={styles.productItemWrapper}>
      <View style={{width:160,height:150,justifyContent:"center",alignItems:"center",paddingTop:10}}>
        <Image source={{uri:product.image}}  style={{width:"100%",height:"100%",objectFit:"contain"}}/>
      </View>
     
        <View style={{width:160,gap:7,justifyContent:"center"}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>{product.title.substring(0,29)}...</Text>
            <Text style={{fontWeight:"bold",fontSize:11,color:"gray"}}>{product.category}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold",fontSize:14}}>{product.price}$</Text>
            <TouchableOpacity>
            <Heart size="19" color="red" variant="Bold"/>
            </TouchableOpacity>
            </View>
        </View>
        <View style={{width:"100%",alignItems:"center"}}><Button/></View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productItemWrapper:{
        width:width/2.3,
        borderWidth:0.8,
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
        borderColor:AppColors.PRIMARY
    }
}
)
