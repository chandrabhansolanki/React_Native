import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

const LoginSignup = ({navigation}) => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(Entypo.font);
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }


    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onLayout={onLayoutRootView}>
            <ImageBackground style={styles.container} source={require('../../assets/Vector.png')} >
                <View style={[styles.logo, { height: Dimensions.get("window").height / 1.5 }]}>
                    <Image style={styles.logoStyle} source={require("../../assets/Frame.png")} />
                </View>
                <View style={[styles.textContianer]}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "600", lineHeight: 30, textAlign: 'center' }}>Discover the easiest way to buy and</Text>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "600", textAlign: 'center' }}>sell crypto assets</Text>
                </View>

                <TouchableOpacity style={{ alignItems: "center", marginTop: 30 }} onPress={() => navigation.navigate("login")} >
                    <View style={{ width: "88%" }} >
                        <LinearGradient colors={["#1B75D0", "#6AD0FF"]} start={[0.0, 0.0]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.loginButton}>
                            <Text style={{ color: "white" }}>Login</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center", marginTop: 12 }} onPress={() => navigation.navigate("Signup")}>
                    <View style={styles.signButton}>
                        <Text style={{ color: "white" }}>Signup</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        // marginTop:191
    },
    logoStyle: {
        height: 270,
        width: 225,
    },
    // textContianer: {
    //     // alignItems: "center",
    //     // height: Dimensions.get("screen").width / 7.5
    // },
    loginButton: {
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    signButton: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#1B75D0",
        width: "88%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LoginSignup