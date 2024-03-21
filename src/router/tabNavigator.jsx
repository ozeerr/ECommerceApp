import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';
import HomeScreen from '../screens/home';
import CategoriesScreen from '../screens/categories';
import FavoritesScreen from '../screens/favorites';
import ProfileScreen from '../screens/profile';
import {AppColors} from '../theme/color';
import { Category, Home2, Like, Profile} from 'iconsax-react-native';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {

  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarShowLabel: false,
        headerRight:()=>{
            return(
               <HeaderTabRight/>
            )
        },
        
      }
}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Home2
                size={focused ? 35 : 28}
                color={focused ? AppColors.PRIMARY : AppColors.GRAY}
                variant="Bold"
              />
            );
          },
          headerTitleStyle: {
            color: AppColors.BLACK,
            fontWeight: 'bold',
            fontSize: 20,
          }
        }
        
    }
        name={HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <Category size={focused ? 35 : 28} color={focused ? AppColors.PRIMARY : AppColors.GRAY} variant="Bold" />;
          },
        }}
        name={CATEGORIES}
        component={CategoriesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
                <Like size={focused ? 35 : 28} color={focused ? AppColors.PRIMARY : AppColors.GRAY} variant="Bold"/>
            );
          },
        }}
        name={FAVORITES}
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
                <Profile size={focused ? 35 : 28} color={focused ? AppColors.PRIMARY : AppColors.GRAY} variant="Bold"/>
            );
          },
        }}
        name={PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
