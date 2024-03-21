import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { Bag2, SearchNormal1 } from 'iconsax-react-native';
import { AppColors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../../utils/routes';

const HeaderTabRight = () => {
    const navigation = useNavigation()
    const [count,setCount]=useState(0)
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <SearchNormal1 size="24" color={AppColors.PRIMARY} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(CART);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          marginRight: 30,
          borderLeftWidth: 0.2,
          paddingLeft: 10,
        }}>
        <Bag2 size="28" color={AppColors.PRIMARY} variant="Bold" />
        <Text
          style={{color: AppColors.PRIMARY, fontSize: 17, fontWeight: 'bold'}}>
          {count}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;

const styles = StyleSheet.create({});
