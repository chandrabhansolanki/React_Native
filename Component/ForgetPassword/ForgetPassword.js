import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const ForgetPassword = ({navigation}) => {
    const backgroundImage = require("../../assets/Vector.png")
    const loginLogos = require("../../assets/loginlogo.png")
    const emailLogo = require("../../assets/emaillogo.png")
    const arrow = require("../../assets/leftarrow.png")

    return (


        <ImageBackground style={styles.container} source={backgroundImage} >
            <View style={styles.loginLogo}>
                <View style={{ width:"88%",alignItems: "flex-start", justifyContent: "flex-start", marginBottom:18}}>
                    <TouchableOpacity onPress={()=> navigation.navigate("login")}>

                    <Image source={arrow} style={{ width:11, height:18}} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image source={loginLogos} style={styles.logoStyle} />
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View>
                    <Text style={styles.welcome}>
                        Forgot
                    </Text>
                    <Text style={styles.welcome}>
                        Password!
                    </Text>
                    <Text style={{ fontSize: 14, color: 'white', opacity: 0.6, paddingTop: 10 }}>
                        Enter your email, we will send you conformation code
                    </Text>
                </View>
                <View style={styles.emailContainer}>
                    <Image source={emailLogo} style={{ width: 17, height: 24, resizeMode: "contain" }} />
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder="Enter your email" />
                </View>

                <TouchableOpacity style={{ alignItems: "center", marginTop: 50 }} onPress={()=>navigation.navigate("enterVerfication")} >
                    <View style={{ width: "100%" }} >
                        <LinearGradient colors={["#1B75D0", "#6AD0FF"]} start={[0.0, 0.0]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.loginButton}>
                            <Text style={{ color: "white" }}>Submit</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>


            </View>
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

export default ForgetPassword