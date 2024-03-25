import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WidgetTitle from '../components/widgets/widgetTitle'
import { getRequest } from '../service/verbs'
import { BASE_URL, PRODUCTS_URL } from '../service/urls'
import ProductsCard from '../components/widgets/productsCard'
import CategorySelect from '../components/widgets/categorySelect'

const BestSeller = () => {
  const [products,setProducts]=useState()
  const getBestSellerProducts=(category="men's clothing")=>{
      getRequest(`${BASE_URL}${PRODUCTS_URL}/category/${category}/?sort=desc`)
      .then((response)=>setProducts(response?.data))
      .catch((error)=>console.log(error))
  }
  useEffect(()=>{
    getBestSellerProducts()
  },[])

  return (
    <View style={styles.container}>
      <WidgetTitle title="Best Seller" category={"women's clothing"} />
      <CategorySelect onSelect={(category)=>getBestSellerProducts(category)}/>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={products}
      renderItem={({item})=><ProductsCard product={item} value={"bestseller"}/>}
      keyExtractor={(item)=>item.id?.toString()}
      />
    </View>
  )
}

export default BestSeller

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent: "center",
  }
})