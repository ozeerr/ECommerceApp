import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppColors } from '../../theme/color'
import StoreContext from '../../context'
import { screenStyle } from '../../styles/screenStyle'
import CartItem from '../../components/cart/cartItem'
import Summary from '../../components/cart/summary'

const CartScreen = () => {
  const {cart} = useContext(StoreContext)
  const total=()=>{
    let total=0
    cart.forEach(item=>total+=item.price)
    return total
  }
  return (
    <View style={screenStyle.container}>
      <FlatList
      data={cart}
      renderItem={({item})=><CartItem item={item}/>}
      />
      <Summary total={total}/>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  
})