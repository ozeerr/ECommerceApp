import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppColors } from '../../theme/color'
import { screenStyle } from '../../styles/screenStyle'
import StoreContext from '../../context'
import FavoriteCard from '../../components/favorites/favoriteCard'

const FavoritesScreen = () => {
  const {favorites} = useContext(StoreContext)

  return (
    <View style={screenStyle.container}>
  
       <FlatList data={favorites} renderItem={({item})=><FavoriteCard item={item}/>}/>
    
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    text: {
      fontSize:40,color:AppColors.PRIMARY,fontWeight:"bold"
    },
    textWrapper:{
      flex:1,alignItems:"center",justifyContent:"center"
     }
})