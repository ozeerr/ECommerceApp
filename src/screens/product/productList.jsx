import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { BASE_URL, PRODUCTS_URL } from '../../service/urls'
import ProductCard from '../../components/product/productCard'
import { getRequest } from '../../service/verbs'
import Spinner from '../../ui/spinner'
import CategorySelect from '../../components/widgets/categorySelect'

const ProductList = () => {
  const [products,setProducts]=useState([])
  const [isLoading,setIsLoading]=useState()

  const getAllProducts=(category="electronics")=>{
    setIsLoading(true)
    getRequest(`${BASE_URL}${PRODUCTS_URL}/category/${category}`)
    .then((response)=>setProducts(response?.data))
    .catch((error)=>console.log(error))
    .finally(()=>setIsLoading(false))
}

useEffect(()=>{
  getAllProducts()
},[])

 
  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={(category)=>getAllProducts(category)}/>
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

