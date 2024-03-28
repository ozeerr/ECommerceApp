import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height } from '../../utils/dimensions'
import { AppColors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native'
import { PRODUCT_LIST } from '../../utils/routes'

const CategoryCard = ({item}) => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>{navigation.navigate(PRODUCT_LIST,{category:item,title:item?.charAt(0).toUpperCase()+item?.slice(1)})}} style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container:{
    backgroundColor:AppColors.GRAY,
    minHeight:height/4,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    borderRadius:10
  },
  text:{
    textTransform:"uppercase",fontSize:20,fontWeight:"bold",color:AppColors.WHITE
  }
})