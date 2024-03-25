import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { Bag2, SearchNormal1 } from 'iconsax-react-native';
import { AppColors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../../utils/routes';
import Badge from '../cart/badge';

const HeaderTabRight = () => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <SearchNormal1 size="24" color={AppColors.PRIMARY} />
      </TouchableOpacity>
      <Badge/>
    </View>
  );
};

export default HeaderTabRight;

const styles = StyleSheet.create({});
