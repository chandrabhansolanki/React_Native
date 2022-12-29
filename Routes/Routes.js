import React from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Component/Login/Login"
import LoginSignup from "../Component/LoginSignup/LoginSignup"
import Signup from "../Component/Sign Up/SignUp"
import ForgetPassword from "../Component/ForgetPassword/ForgetPassword"
import EnterVerfication from "../Component/Enter Verfication/EnterVerfication"
import MainNavigation from "../Component/MainNavigation/MainNavigation"

const Routes =() => {
    const Stack = createNativeStackNavigator()
    return (
      
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='loginSignup' component={LoginSignup} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="forgetpassword" component={ForgetPassword} />
                <Stack.Screen name="enterVerfication" component={EnterVerfication} />
                <Stack.Screen name="navigations" component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes