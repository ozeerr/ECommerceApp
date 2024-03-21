import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../theme/color'

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:AppColors.WHITE
    },
})