import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Heart } from 'iconsax-react-native'
import StoreContext from '../context'

export default function Like({item}) {
    const {addFavorite} = useContext(StoreContext)
  return (
    <TouchableOpacity onPress={()=>addFavorite(item)} >
            <Heart size="30" color="red" variant="Bold"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})