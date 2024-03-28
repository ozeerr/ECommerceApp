import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bag2 } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'
import { CART } from '../../utils/routes'
import StoreContext from '../../context'

const Badge = () => {
const {cart} = useContext(StoreContext)
    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate(CART);
    }}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      marginRight: 10,
      borderLeftWidth: 0.2,
      paddingLeft: 10,
    }}>
    <Bag2 size="28" color={AppColors.PRIMARY} variant="Bold" />
    <Text
      style={{color: AppColors.PRIMARY, fontSize: 17, fontWeight: 'bold'}}>
      {cart.length}
    </Text>
  </TouchableOpacity>
  )
}

export default Badge

const styles = StyleSheet.create({})