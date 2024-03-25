import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../utils/dimensions'
import { AppColors } from '../theme/color'

const Counter = () => {
    const [count, setCount] = useState(1)
  return (
    <View style={{flexDirection:"row",backgroundColor:AppColors.PRIMARY,width:width*0.23,alignItems:"center",justifyContent:"space-between",borderRadius:100,padding:4,}}>
      <TouchableOpacity onPress={()=>count>0&&setCount(count-1)} style={{backgroundColor:"white",width:35,height:35,borderRadius:100,alignItems:"center",justifyContent:"center"}}><Text>-</Text></TouchableOpacity>
        <Text style={{color:AppColors.WHITE}}>{count}</Text>
        <TouchableOpacity onPress={()=>setCount(count+1)} style={{backgroundColor:"white",width:35,height:35,borderRadius:100,alignItems:"center",justifyContent:"center"}}><Text>+</Text></TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})