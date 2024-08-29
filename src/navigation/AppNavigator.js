import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

    const LoginStack = () => (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Sign-In" component={LoginScreen} />
            <Stack.Screen name="Sign-Up" component={SignupScreen} />
        </Stack.Navigator>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginStack" component={LoginStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator