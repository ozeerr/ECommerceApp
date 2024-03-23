import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WidgetTitle from '../components/widgets/widgetTitle'
import { getRequest } from '../service/verbs'
import { BASE_URL, PRODUCTS_URL } from '../service/urls'
import ProductsCard from '../components/widgets/productsCard'

const NewArrival = () => {
  const [products,setProducts]=useState()
  const getAllProducts=()=>{
      getRequest(`${BASE_URL}${PRODUCTS_URL}/?limit=5`)
      .then((response)=>setProducts(response?.data))
      .catch((error)=>console.log(error))
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <View style={styles.container}>
      <WidgetTitle title="New Arrival" />
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={products}
      renderItem={({item})=><ProductsCard product={item}/>}
      keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  )
}

export default NewArrival

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent: "center",
  }
})