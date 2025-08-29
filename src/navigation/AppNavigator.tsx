import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Beach } from '../types';

// Import screens
import BeachListScreen from '../screens/BeachListScreen';
import BeachDetailScreen from '../screens/BeachDetailScreen';
import ReportScreen from '../screens/ReportScreen';

export type RootStackParamList = {
  BeachList: undefined;
  BeachDetail: { beach: Beach };
  Report: { beach: Beach };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BeachList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0ea5e9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="BeachList"
          component={BeachListScreen}
          options={{ title: 'BeachCheck España' }}
        />
        <Stack.Screen
          name="BeachDetail"
          component={BeachDetailScreen}
          options={({ route }) => ({ title: route.params.beach.name })}
        />
        <Stack.Screen
          name="Report"
          component={ReportScreen}
          options={{ title: 'Make a report' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

