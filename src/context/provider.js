import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import StoreContext from '.'

const Provider = ({children}) => {
    const [cart,setCart]=useState([])
    const [isLogin,setIsLogin]=useState(false)
    const addCart=(item)=>{
        setCart([...cart,item])
    }

    const removeCart=(item)=>{
        const newCart=cart.filter((cartItem)=>cartItem.id!==item.id)
        setCart(newCart)
    }
  return (
    <StoreContext.Provider value={{cart,setCart,addCart,removeCart}}>
        {children}
    </StoreContext.Provider>
  )
}

export default Provider

const styles = StyleSheet.create({})