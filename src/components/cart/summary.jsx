import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Button from '../../ui/button'
import { height } from '../../utils/dimensions'
import StoreContext from '../../context'
import { useNavigation } from '@react-navigation/native'
import { LOGIN } from '../../utils/routes'

const Summary = ({total}) => {
    const navigation=useNavigation()
    const {isLogin}=useContext(StoreContext)

    const checkOut=()=>{
        if(isLogin){
            navigation.navigate("CHECKOUT")
        }else{
            Alert.alert('LOGIN', 'You need Login first.', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate(LOGIN),
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
              
              ]);
        }
    }

  return (
    <View style={{gap:10,padding:20,borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:"#FFFBFF"}}>
        <View style={{gap:20}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Subtotal:</Text>
            <Text style={{fontWeight:"bold"}}>{total()}$</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Delivery Fee:</Text>
            <Text style={{fontWeight:"bold"}}>20$</Text>
        </View>
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Discount:</Text>
            <Text style={{fontWeight:"bold"}}>30$</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Total:</Text>
            <Text style={{fontWeight:"bold"}}>{(total()-50)?.toFixed(2)}$</Text>
        </View>
        </View>
        <View style={{height:height*0.1,alignItems:"center",justifyContent:"center"}}><Button title="Checkout" onPress={()=>checkOut()}/></View>
    </View>
  )
}

export default Summary

const styles = StyleSheet.create({})