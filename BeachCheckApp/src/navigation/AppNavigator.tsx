import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BeachListScreen from '../screens/BeachListScreen';
import BeachDetailScreen from '../screens/BeachDetailScreen';
import ReportScreen from '../screens/ReportScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BeachList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
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
          options={({ route }) => ({ title: `Отчет: ${route.params.beach.name}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;