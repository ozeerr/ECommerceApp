import { Image, StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native'
import React, { useContext } from 'react'
import { Heart, MedalStar } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'
import { width } from '../../utils/dimensions'
import { PRODUCT_DETAIL } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
import Button from '../../ui/button'
import StoreContext from '../../context'
import Counter from '../../ui/counter'

const ProductCard = ({item}) => {
    return (
    <Pressable style={styles.productItemWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={{uri:item.image}}  style={styles.imageStyle}/>
      </View>
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title.substring(0,29)}...</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}$</Text>
            <TouchableOpacity>
            <Heart size="19" color="red" variant="Bold"/>
            </TouchableOpacity>
            </View>
            <Counter item={item}/>
        </View>
    </Pressable>
  )
}

export default ProductCard

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
        borderColor:AppColors.PRIMARY,
        flexDirection:"row"
    },
    imageWrapper:{
        width:160,height:150,justifyContent:"center",alignItems:"center"
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
