import { Image, StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AppColors } from '../../theme/color'
import { width } from '../../utils/dimensions'
import { PRODUCT_DETAIL } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
import Button from '../../ui/button'
import StoreContext from '../../context'
import Like from '../../ui/like'

const ProductCard = ({product}) => {
    const navigation=useNavigation()
    const {addCart,addFavorite}=useContext(StoreContext)
  return (
    <Pressable onPress={()=>navigation.navigate(PRODUCT_DETAIL,{item:product})} style={styles.productItemWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={{uri:product.image}}  style={styles.imageStyle}/>
      </View>
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>{product.title.substring(0,29)}...</Text>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.priceWrapper}>
            <Text style={styles.price}>{product.price}$</Text>
            <Like item={product}/>
            </View>
        </View>
        <View style={styles.buttonWrapper}><Button title={"Add to basket"} onPress={()=>{addCart(product)}}/></View>
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
    },
    imageWrapper:{
        width:160,height:150,justifyContent:"center",alignItems:"center",paddingTop:10
    },
    imageStyle:{
        width:"100%",height:"100%",objectFit:"contain"
    },
    contentWrapper:{
        width:160,gap:7,justifyContent:"center"
    },
    title:{
        fontWeight:"bold",fontSize:15
    },
    category:{
        fontWeight:"bold",fontSize:12,color:"gray"
    },
    priceWrapper:{
        flexDirection:"row",justifyContent:"space-between"
    },
    price:{
        fontWeight:"bold",fontSize:14
    },
    buttonWrapper:{
        width:"100%",alignItems:"center"
    }
}
)
