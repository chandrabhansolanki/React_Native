import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { accounts, accountActive, home, homeActive, market, marketActive, trader, traderActive, wallet, walletActive } from "../../Images/Images"
import { Image } from "react-native"
import Home from "./Screens/Home"
import Market from "./Screens/Market"
import Trade from "./Screens/Trade"
import Account from "./Screens/Account"
import Wallet from "./Screens/Wallet"

const MainNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#0c1826" } }}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? homeActive : home} style={{height:22,width:22}} />
                )
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? marketActive : market} />
                )
            }} name="Market" component={Market} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? traderActive : trader} />
                )
            }} name="trade" component={Trade} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? walletActive : wallet} />
                )
            }} name="wallet" component={Wallet} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? accountActive : accounts} />
                )
            }} name="account" component={Account} />
        </Tab.Navigator>
    )
}

export default MainNavigation