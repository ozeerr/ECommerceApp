import {StyleSheet} from 'react-native';
import React from 'react';
import {CART, PRODUCT_DETAIL, PRODUCT_LIST, TAB} from '../utils/routes';
import CartScreen from '../screens/cart';
import TabNavigator from './tabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import {AppColors} from '../theme/color';
import HeaderTabRight from '../components/router/headerTabRight';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.PRIMARY,
     
      
      }}>
      <Stack.Screen
        name={TAB}
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={CartScreen} />
      <Stack.Screen
         options={({route}) => ({
          headerRight: () => <HeaderTabRight />,
          headerTitle: route?.params?.title,
          
        })}
        name={PRODUCT_LIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCT_DETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
