import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { AppColors } from '../theme/color'
import { height } from '../utils/dimensions'

const Button = (props) => {
    const {title,type}=props;
  return (
    <TouchableOpacity {...props} style={{width:"100%",height:height*0.04,backgroundColor:AppColors.PRIMARY,alignItems:"center",justifyContent:"center",borderRadius:10}}>
      <Text style={{color:AppColors.WHITE,fontWeight:"bold"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})