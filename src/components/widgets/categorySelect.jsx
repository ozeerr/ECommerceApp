import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRequest } from '../../service/verbs'
import { BASE_URL, PRODUCTS_URL } from '../../service/urls'
import { AppColors } from '../../theme/color'

const CategorySelect = ({onSelect}) => {
    const [categories,setCategories]=useState([])
    const [selectCategory,setSelectCategory]=useState("electronics")
    const getCategories=()=>{
        getRequest(`${BASE_URL}${PRODUCTS_URL}/categories`)
        .then((response)=>setCategories(response?.data))
        .catch((error)=>console.log(error))
    }
  
    useEffect(()=>{
      getCategories()
    },[])


    const selectCategoryHandler=({item})=>{
        setSelectCategory(item)
        onSelect(item)
    }
  
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>selectCategoryHandler({item})} style={[styles.CategoryButton,selectCategory==item&&styles.activeCategory]}>
                <Text style={selectCategory==item?styles.activeText:styles.inActiveText}>{item}</Text>
            </TouchableOpacity>
        )
    }


  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={renderItem}
      />
    </View>
  )
}

export default CategorySelect

const styles = StyleSheet.create({
    container:{
        flex:1,marginVertical:12
    },
    CategoryButton:{
        padding:12,
        borderWidth:0.5,
        marginRight:8,
        borderRadius:100,
        borderColor:AppColors.PRIMARY
    },
    activeCategory:{
        backgroundColor:AppColors.PRIMARY
    },
    activeText:{
        color:AppColors.WHITE,
        fontWeight:"bold"
    },
    inActiveText:{
        color:AppColors.PRIMARY,
        fontWeight:"bold"
    }  
})