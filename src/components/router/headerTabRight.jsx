import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {  SearchNormal1 } from 'iconsax-react-native';
import { AppColors } from '../../theme/color';
import Badge from '../cart/badge';

const HeaderTabRight = () => {
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
