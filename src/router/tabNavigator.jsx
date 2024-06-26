import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';
import HomeScreen from '../screens/home';
import CategoriesScreen from '../screens/categories';
import FavoritesScreen from '../screens/favorites';
import ProfileScreen from '../screens/profile';
import {AppColors} from '../theme/color';
import { Category, Home2, Like, Profile} from 'iconsax-react-native';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
    
      screenOptions={{
        headerTitleStyle: {color: AppColors.PRIMARY},
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarShowLabel: false,
        headerRight:()=>{
            return(
               <HeaderTabRight/>
            )
        },
        headerTitleStyle:{color:AppColors.PRIMARY}
        
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
            color: AppColors.PRIMARY,
            fontWeight: 'bold',
            fontSize: 20,
          },
                  
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

