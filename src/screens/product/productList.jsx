import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { PRODUCTS_URL } from '../../service/urls'
import ProductCard from '../../components/product/productCard'
import { getRequest } from '../../service/verbs'
import Spinner from '../../ui/spinner'
import CategorySelect from '../../components/widgets/categorySelect'

const ProductList = ({route}) => {
  const [products,setProducts]=useState([])
  const [isLoading,setIsLoading]=useState()
  const filterCategory=route?.params?.category
  

  const getAllProducts=(category)=>{
    const url=category?PRODUCTS_URL+`/category/${category}`:PRODUCTS_URL;
    setIsLoading(true)
    getRequest(url)
    .then((response)=>setProducts(response?.data))
    .catch((error)=>console.log(error))
    .finally(()=>setIsLoading(false))
}

useEffect(()=>{
  getAllProducts(filterCategory)
},[])

 
  return (
    <View style={screenStyle.container}>
      {!filterCategory && <CategorySelect onSelect={(category)=>getAllProducts(category)}/>}
      {isLoading?
      <Spinner/>
      :
      <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={({item})=><ProductCard product={item}/>}
      keyExtractor={(item)=>item.id.toString()}
      />}
    </View>
  )
}

export default ProductList

