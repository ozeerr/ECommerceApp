import { StyleSheet, Text, View,ActivityIndicator} from 'react-native'
import React from 'react'
import { AppColors } from '../theme/color'

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={AppColors.PRIMARY} />
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})