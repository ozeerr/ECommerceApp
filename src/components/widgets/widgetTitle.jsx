import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/dimensions'

const WidgetTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity><Text style={styles.text}>See More</Text></TouchableOpacity>
    </View>
  )
}

export default WidgetTitle

const styles = StyleSheet.create({
    container: {
        paddingVertical:12,
        width:width*0.85,
        flex: 1,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text:{
        color: "gray",
        fontWeight: 'bold',
    }
})