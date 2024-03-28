import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Layout, Text, ViewPager } from '@ui-kitten/components';
import { height, width } from '../../utils/dimensions';
import { AppColors } from '../../theme/color';
import { ArrowRight } from 'iconsax-react-native';
import Button from '../../ui/button';
import { HOME } from '../../utils/routes';
import StoreContext from '../../context';

 const CheckoutScreen = ({route,navigation}) => {
  const {removeAllCart}=useContext(StoreContext)
const {total}=route?.params
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [cardNumber, setCardNumber] = React.useState('');
  const [ccv, setCcv] = React.useState('');
  const shouldLoadComponent = (index)=> index === selectedIndex;
const handleConfirm=()=>{
  removeAllCart()
  alert("Order Confirmed")
  navigation.navigate(HOME)
}

  return (
   <View style={{justifyContent:"center",flex:1}}>
     <ViewPager
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={index => setSelectedIndex(index)}
    >
      <Layout
        level='2'
        style={styles.tab}
      >
       <View style={{width:width,padding:30,gap:20}}>
        <Text category="h4">PAYMENT</Text>
        <Text category="h5">{total}$</Text>
        <Input value={cardNumber} onChangeText={(prev)=>setCardNumber(prev)} placeholder="Example: 0000 0000 0000 0000 0000" caption="Enter your card number" style={{borderColor:AppColors.GRAY}}/>
        <Input value={ccv} onChangeText={(prev)=>setCcv(prev)}  placeholder="Example: 999" caption="Enter your CCV" style={{borderColor:AppColors.GRAY}}/>
        <View style={{flexDirection:"row",gap:6,alignItems:"center",justifyContent:"flex-end"}}><Text>SCROLL LEFT</Text><ArrowRight size="32" color={AppColors.PRIMARY}/></View>
       </View>
      </Layout>
      <Layout
        level='2'
        style={styles.tab}
      >
          <View style={{width:width,padding:30,gap:10}}>
          <Text category="h4">ORDER CONFIRMATION</Text>
          <Text category="h5">{total}$</Text>
          <View style={{borderWidth:0.2,borderColor:AppColors.PRIMARY,padding:20,borderRadius:20}}><Text >NUMBER: {cardNumber}</Text>
          <Text>CCV: {ccv}</Text></View>
          <Button title="CONFIRM ORDER" onPress={()=>handleConfirm()} style={{marginTop:20}}/>
          </View>
      </Layout>
    </ViewPager>
   </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutScreen;