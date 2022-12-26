import React from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Component/Login/Login"
import LoginSignup from "../Component/LoginSignup/LoginSignup"
import Signup from "../Component/Sign Up/SignUp"

const Routes =() => {
    const Stack = createNativeStackNavigator()
    return (
      
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='loginSignup' component={LoginSignup} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes