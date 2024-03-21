import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../theme/color'

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:AppColors.WHITE
    },
})