import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import AppStack from './AppStack.tsx';

export const screenOptions: NativeStackNavigationOptions = {
  orientation: 'portrait',
  animation: 'slide_from_right',
  headerShown: false,
};

const RootNavigator = () => {
  const renderStack = () => {
    return <AppStack {...screenOptions} />;
  };

  return <NavigationContainer>{renderStack()}</NavigationContainer>;
};

export default RootNavigator;
