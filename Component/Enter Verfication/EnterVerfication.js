import React, { useState } from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
const EnterVerfication = ({ navigation }) => {
    const backgroundImage = require("../../assets/Vector.png")
    const loginLogos = require("../../assets/loginlogo.png")
    const arrow = require("../../assets/leftarrow.png")

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <ImageBackground style={styles.container} source={backgroundImage} >
            <View style={styles.loginLogo}>
                <View style={{ width: "88%", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: 18 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Image source={arrow} style={{ width: 11, height: 18 }} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image source={loginLogos} style={styles.logoStyle} />
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View>
                    <Text style={styles.welcome}>
                        Enter
                    </Text>
                    <Text style={styles.welcome}>
                        Verfication Code!
                    </Text>
                    <Text style={{ fontSize: 14, color: 'white', opacity: 0.6, paddingTop: 10 }}>
                        Enter your email, we will send you conformation code
                    </Text>
                </View>
                {/* <View style={styles.emailContainer}>
                    <Image source={emailLogo} style={{ width: 17, height: 24, resizeMode: "contain" }} />
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder="Enter your email" />
                </View> */}

                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

                <View style={styles.resendContainer}>
                    <Text style={{ color: "white", textAlign: "center" }}>Didn’t received the code? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#56BAF3", textAlign: "center" }}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ alignItems: "center", }}  >
                    <View style={{ width: "100%" }} >
                        <LinearGradient colors={["#1B75D0", "#6AD0FF"]} start={[0.0, 0.0]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={styles.confirmOTP}>
                            <Text style={{ color: "white" }}>Confirm OTP</Text>
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
    resendContainer: {
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30
    },
    confirmOTP: {
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: Dimensions.get("window").width / 8,
        height: Dimensions.get("window").height / 15,
        lineHeight: 50,
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: 'grey',
        textAlign: 'center',
        backgroundColor: "grey",
        opacity: .3,
        color: "white"
    },
    focusCell: {
        borderColor: 'grey',
    },

})

export default EnterVerfication