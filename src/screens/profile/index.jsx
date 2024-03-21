import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../theme/color'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:AppColors.WHITE
    },
})