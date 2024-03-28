import { Image, StyleSheet, Text, TouchableOpacity, View,Pressable} from 'react-native'
import React from 'react'
import {  MedalStar } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native'
import { PRODUCT_DETAIL } from '../../utils/routes'
import Like from '../../ui/like'

const ProductsCard = ({product,value}) => {
  const navigation=useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate(PRODUCT_DETAIL,{item:product})} style={styles.productItemWrapper}>
                {value&& <View style={{position:"absolute",top:5,left:0}}><MedalStar size="32" color={AppColors.YELLOW} variant="Bold"/></View>}
      <View style={styles.imageContainerWrapper}>
        <Image source={{uri:product.image}}  style={styles.imageWrapper}/>
      </View>
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>{product.title.substring(0,29)}...</Text>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.bottomContentWrapper}>
            <Text style={styles.price}>{product.price}$</Text>
           <Like item={product}/>
            </View>
        </View>
    </Pressable>
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
    },
    imageContainerWrapper:{
      width:160,height:150,justifyContent:"center",alignItems:"center",paddingTop:10
    },
    imageWrapper:{
      width:"100%",height:"100%",objectFit:"contain"
    },
    contentWrapper:{
      width:160,gap:7,justifyContent:"center"
    },
    title:{
      fontWeight:"bold",fontSize:15
    },
    category:{
      fontWeight:"bold",fontSize:11,color:"gray"
    },
    bottomContentWrapper:{
      flexDirection:"row",justifyContent:"space-between"
    },
    price:{
      fontWeight:"bold",fontSize:14
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