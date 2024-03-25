import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../../service/verbs'
import { BASE_URL, PRODUCTS_URL } from '../../service/urls'
import { AppColors } from '../../theme/color'
import { height } from '../../utils/dimensions'
import CategoryCard from '../../components/categories/categoryCard'
import { screenStyle } from '../../styles/screenStyle'

const CategoriesScreen = () => {
    const [categories,setCategories]=useState()
    const getCategories=()=>{
        getRequest(`${BASE_URL}${PRODUCTS_URL}/categories`)
        .then((response)=>setCategories(response?.data))
        .catch((error)=>console.log(error))
    }
  
    useEffect(()=>{
      getCategories()
    },[])


  


  return (
    <View style={screenStyle.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={categories}
      renderItem={({item})=>(
         <CategoryCard item={item}/>
      )}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  
})