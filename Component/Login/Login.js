import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
// import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
    const backgroundImage = require("../../assets/Vector.png")
    const loginLogos = require("../../assets/loginlogo.png")
    const emailLogo = require("../../assets/emaillogo.png")
    const padlogo = require("../../assets/padlock.png")
    const view = require("../../assets/view.png")
    const left = require("../../assets/left.png")
    const right = require("../../assets/right.png")
    const apple = require("../../assets/apple.png")
    const google = require("../../assets/Google.png")
    return (
        <ImageBackground style={styles.container} source={backgroundImage} >
            <ScrollView>
                <View style={styles.loginLogo}>
                    <Image source={loginLogos} style={styles.logoStyle} />
                </View>
                <View style={styles.containerTwo}>
                    <View>
                        <Text style={styles.welcome}>
                            Welcome
                        </Text>
                        <Text style={styles.welcome}>
                            Back!
                        </Text>
                        <Text style={{ fontSize: 14, color: 'white', opacity: 0.6, paddingTop: 10 }}>
                            Please login to your account
                        </Text>
                    </View>
                    <View style={styles.emailContainer}>
                        <Image source={emailLogo} style={{ width: 17, height: 24, resizeMode: "contain" }} />
                        <TextInput style={styles.email} placeholderTextColor="white" placeholder="Enter your email" />
                    </View>
                    <View style={[styles.emailContainer, { position: "relative" }]}>
                        <Image source={padlogo} style={{ width: 17, height: 24, resizeMode: "contain" }} />
                        <TextInput style={styles.email} placeholderTextColor="white" placeholder="Enter your password" />
                        <Image source={view} style={{ position: "absolute", height: 16, width: 16, right: 6, top: 5 }} />
                    </View>
                    <View style={{ marginTop: 12, alignItems: "flex-end", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
                            <Text style={{ color: "white", }}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignItems: "center", marginTop: 30 }} onPress={() => navigation.navigate('home')} >
                        <View style={{ width: "100%" }} >
                            <LinearGradient colors={["#1B75D0", "#6AD0FF"]} start={[0.0, 0.0]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.loginButton}>
                                <Text style={{ color: "white" }}>Login</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginVertical: 25, alignItems: "center", justifyContent: "center" }}>
                        <Image source={left} style={{ height: 3, width: 132 }} />
                        <Text style={{ color: "white", fontSize: 12, marginHorizontal: 10 }}>Or Sign in With</Text>
                        <Image source={right} style={{ height: 3, width: 132 }} />
                    </View>
                    <View>
                        <TouchableOpacity style={{ alignItems: "center" }} >
                            <View style={styles.signUpButton}>
                                <Image source={google} style={{ height: 20, width: 19.58, marginRight: 10 }} />
                                <Text style={{ color: "white" }}>Sign in with Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: "center", marginTop: 12 }} >
                            <View style={styles.signUpButton} >
                                <Image source={apple} style={{ height: 19.98, width: 16.85, marginRight: 10 }} />
                                <Text style={{ color: "white" }}>Sign in with Apple</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 16 }}>
                            <Text style={{ color: "#fff", }}>Not register yet ? </Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#56BAF3", }}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        // flex:1
    },
    loginLogo: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: "center",
        height: Dimensions.get("window").height / 3.4,
    },
    logoStyle: {
        width: 250,
        height: 65,
    },
    containerTwo: {
        marginHorizontal: 25
    },
    welcome: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "600",
    },
    email: {
        marginLeft: 12,
        width: "80%",
        opacity: 0.5,
        color: "white"
    },
    emailContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginTop: 30

    },
    loginButton: {
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    signUpButton: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#1B75D0",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    }


})

export default Login