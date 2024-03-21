import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Heart, MedalStar } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'

const ProductsCard = ({product,value}) => {
  return (
    <View style={styles.productItemWrapper}>
                {value&& <View style={{position:"absolute",top:5,left:0}}><MedalStar size="32" color={AppColors.YELLOW} variant="Bold"/></View>}
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
    </View>
  )
}

export default ProductsCard

const styles = StyleSheet.create({
    productItemWrapper:{
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



// "category": "men's clothing",
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "id": 1,
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "price": 109.95,
// "rating": {"count": 120, "rate": 3.9},
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"