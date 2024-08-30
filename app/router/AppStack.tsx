import * as React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import routes from './Routes';
import Home from '@screens/Home';

const Stack = createNativeStackNavigator();

export const AppStack: React.FC<NativeStackNavigationOptions> = props => {
  return (
    <Stack.Navigator initialRouteName={routes.HOME} screenOptions={props}>
      <Stack.Screen
        name={routes.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
