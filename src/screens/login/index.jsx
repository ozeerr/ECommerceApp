import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Input} from "@ui-kitten/components"
import { screenStyle } from '../../styles/screenStyle'
import { AppColors } from '../../theme/color'
const LoginScreen = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  console.log(username,password)
  return (
    <View style={screenStyle.container}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:40,fontWeight:"bold",color:AppColors.PRIMARY}}>OZER STORE</Text>
        <Input 
        value={username}
        placeholder="Email" 
        style={{marginTop:20}}
        onChangeText={nextValue => setUsername(nextValue)}

        />
        <Input 
         style={{marginTop:20}}
         value={password}
         placeholder='Password'
         onChangeText={nextValue => setPassword(nextValue)}

         />
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})