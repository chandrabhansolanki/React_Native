import React, { useState } from "react"
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from "react-native"
import { bell, homeLogo, homebackground, menu, speaker, graph1, graph2, graph3, account, more, security, free, referal, notification } from "../../../Images/Images";
import Swiper from 'react-native-swiper'


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const data = [
        {
        image: graph3
    },
    {
        image: graph2
    },
    {

        image: graph1
    },
]

const Home = () => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);


    const renderItem = ({ item }) => {
        return <Image style={{ width: 157, borderRadius: 5, height: 79, resizeMode: "contain",  borderWidth: 10, borderWidthColor: "red" }} source={item.image} />
    }

    return (
        <View style={styles.mainContainer} >
            <StatusBar
                animated={true}
                backgroundColor="#060D1D"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logocontainer} >
                        <Image source={homeLogo} />
                        <Image source={bell} style={{ height: 23.66, width: 23.84 }} />
                    </View>
                    <Swiper style={styles.wrapper} showsButtons={false} dotColor="#55596A">
                        <View >
                            <Image source={homebackground} style={{ height: 160, width: 320, resizeMode: "contain" }} />
                        </View>
                        <View >
                            <Image source={homebackground} style={{ height: 160, width: 320, resizeMode: "contain" }} />
                        </View>
                        <View >
                            <Image source={homebackground} style={{ height: 160, width: 320, resizeMode: "contain" }} />
                        </View>
                        <View >
                            <Image source={homebackground} style={{ height: 160, width: 320, resizeMode: "contain" }} />
                        </View>
                    </Swiper>
                    <View style={[styles.logocontainer , {paddingBottom:15}]}>
                        <Image source={speaker} />
                        <Text style={{ color: "white", fontSize: 10, fontWeight: "300" }}>NKN Staking special : Enjoy up to 50% reward rate and sha </Text>
                        <Image source={menu} />
                    </View>
                </View>
                <View style={{borderWidth: 5, borderColor: "#0c1826"}}>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around",  paddingVertical: 20 }}>
                        <TouchableOpacity>
                            <Image source={account} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={security} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={free} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", paddingBottom: 20, borderBottomWidth: 6, borderBottomColor: "#0c1826" }}>
                        <TouchableOpacity>
                            <Image source={referal} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={notification} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={more} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 28,}}>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity><Text style={{ color: "white",  paddingVertical: 18 }}>Spot</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: "white", paddingVertical: 18, paddingHorizontal:20 }}>Gainers</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: "white",  paddingVertical: 18 }}>New Listed</Text></TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#060D1D",
    },
    container: {
        marginTop: 25,
        marginHorizontal: 28,
        justifyContent: "center",
        alignItems: "center",
    },
    logocontainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    wrapper: {
        height: Dimensions.get("window").height / 4,
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

})

export default Home