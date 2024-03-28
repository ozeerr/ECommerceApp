import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Input} from "@ui-kitten/components"
import { screenStyle } from '../../styles/screenStyle'
import { AppColors } from '../../theme/color'
import Button from '../../ui/button'
import StoreContext from '../../context'
import { Eye, EyeSlash } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import { postRequest } from '../../service/verbs'
import { LOGIN_URL } from '../../service/urls'
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [disableButton, setDisabledButton] = useState(false);
  const {setIsLogin} = useContext(StoreContext);
  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
    } else Alert.alert('Please type your Username');
    if (password) form.password = password;
    else Alert.alert('Please type your Password');
    if (username && password) {
      setDisabledButton(true);
      postRequest(LOGIN_URL, form)
        .then(response => {
          response.data?.token && setIsLogin(true);navigation.goBack();
        
        })
        .catch(error => {
          console.log("ERROR",error);
        })
        .finally(() => {
          setDisabledButton(false);
        });
    }
  }
   

  return (
    <View style={screenStyle.container}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:40,fontWeight:"bold",color:AppColors.PRIMARY}}>OZER STORE</Text>
        <Input 
        style={{
          marginVertical: 10,
          borderColor: AppColors.PRIMARY,
        }}
        value={username}
        label="Username"
        placeholder="username here..."
        onChangeText={nextValue => setUsername(nextValue)}
        
        />
        <Input 
         style={{marginTop: 10, marginBottom: 20, borderColor: AppColors.PRIMARY}}
         value={password}
         label="Password"
         placeholder="Type your password"
         secureTextEntry={secureTextEntry}
         accessoryRight={() =>
           secureTextEntry ? (
             <EyeSlash
               size="18"
               color={AppColors.PRIMARY}
               onPress={() => setSecureTextEntry(!secureTextEntry)}
             />
           ) : (
             <Eye
               size="18"
               color={AppColors.PRIMARY}
               onPress={() => setSecureTextEntry(!secureTextEntry)}
             />
           )
         }
         onChangeText={nextValue => setPassword(nextValue)}
         />
         <Button title="Login" onPress={()=>login()} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})

export default LoginScreen
