import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import SwiperComponent from './SwiperComponent';

const StackNavigation = createStackNavigator({
  SwiperScreen: {
    screen: SwiperComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginComponent,
    headerShown: false,
  },
  SignupScreen: {
    screen: SignupComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(StackNavigation);
