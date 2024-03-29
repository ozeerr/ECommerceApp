import { FlatList,  View } from 'react-native'
import React from 'react'
import { AppColors } from '../../theme/color'
import widgets from '../../widgets'
import { screenStyle } from '../../styles/screenStyle'

const HomeScreen = () => {
  const renderItem=()=>{
    return(
      <FlatList
      data={widgets}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=><View>{item.isShow&&item.component}</View>}/>
    )
  }
  return (
    <View style={screenStyle.container}>
      {renderItem()}
    </View>
  )
}

export default HomeScreen

