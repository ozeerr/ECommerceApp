import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import StoreContext from '.'

const Provider = ({children}) => {
    const [cart,setCart]=useState([])
    const [isLogin,setIsLogin]=useState(false)
    const [favorites,setFavorites]=useState([])
  


    const addCart=(item)=>{
        setCart([...cart,item])
    }
    const removeCart=(item)=>{
      const newCart=cart.filter((cartItem)=>cartItem.id!==item.id)
      setCart(newCart)
  }

  const removeAllCart=()=>{
    setCart([])
  }
    const addFavorite=(item)=>{
      setFavorites([...favorites,item])
  }
  
  const removeFavorite=(item)=>{
    const newFav=favorites.filter((favoriItem)=>favoriItem.id!==item.id)
    setFavorites(newFav)
}


  return (
    <StoreContext.Provider value={{cart,addCart,removeCart,addFavorite,favorites,removeFavorite,setIsLogin,isLogin,removeAllCart}}>
        {children}
    </StoreContext.Provider>
  )
}

export default Provider

const styles = StyleSheet.create({})