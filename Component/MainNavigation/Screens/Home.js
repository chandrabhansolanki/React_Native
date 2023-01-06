import React, { useState } from "react"
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from "react-native"
import { bell, homeLogo, homebackground, menu, speaker, BitcoinGraph, BitcoinImage,  BitcoinDownArrow, BitcoinDownGraph,BitcoinUpArrow, account, more, security, free, referal, notification } from "../../../Images/Images";
import Swiper from 'react-native-swiper'


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const data = [
    {
        bitcoinName: "Bitcoin BTC",
        bitcoinINR: "INR 853,134,900",
        bitcoinImage: BitcoinImage,
        bitcoinGraph: BitcoinGraph,
        bitcoinArrow: BitcoinUpArrow,
        bitcoinPercent: 12.5
    },
    {
        bitcoinName: "Bitcoin BTC",
        bitcoinINR: "INR 853,134,900",
        bitcoinImage: BitcoinImage,
        bitcoinGraph: BitcoinDownGraph,
        bitcoinArrow: BitcoinDownArrow,
        bitcoinPercent: -4.6
    }, {
        bitcoinName: "Bitcoin BTC",
        bitcoinINR: "INR 853,134,900",
        bitcoinImage: BitcoinImage,
        bitcoinGraph: BitcoinDownGraph,
        bitcoinArrow: BitcoinDownArrow,
        bitcoinPercent: -8.9
    }, {
        bitcoinName: "Bitcoin BTC",
        bitcoinINR: "INR 853,134,900",
        bitcoinImage: BitcoinImage,
        bitcoinGraph: BitcoinGraph,
        bitcoinArrow: BitcoinUpArrow,
        bitcoinPercent: 4.5
    }
]

const Home = () => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);


    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <View style={{ borderRightWidth: 5, borderColor: "#0c1826",borderRadius:5 }}>
                <View style={{ height: 79, width: 157, paddingHorizontal: 10, paddingVertical: 8 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image style={{ width: 19, height: 19, resizeMode: "contain" }} source={item?.bitcoinImage} />
                        <Image style={{ width: 47, height: 21, resizeMode: "contain" }} source={item?.bitcoinPercent < 0 ? item?.bitcoinGraph:item?.bitcoinGraph} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 11, alignItems: "center" }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 10, fontWeight: '600', fontStyle: "normal" }}>{item?.bitcoinName}</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-between",width:30, height:17}}>
                            <Image style={{ width: 6, height: 4 }} source={item?.bitcoinPercent < 0 ? item?.bitcoinArrow : item?.bitcoinArrow} />
                            <Text style={item?.bitcoinPercent < 0 ? styles.downArrow : styles.upArrow}>{item?.bitcoinPercent}%</Text>
                        </View>
                    </View>
                    <View style={{ width: 94, height: 18 }}>
                        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "400", lineHeight: 18, fontStyle: "normal" }}>{item.bitcoinINR}</Text>
                    </View>
                </View>
            </View>
        )
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
                    <Swiper style={styles.wrapper} showsButtons={false} dotColor="#55596A" autoplay="true">
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
                    <View style={[styles.logocontainer, { paddingBottom: 15 }]}>
                        <Image source={speaker} />
                        <Text style={{ color: "white", fontSize: 10, fontWeight: "300" }}>NKN Staking special : Enjoy up to 50% reward rate and sha </Text>
                        <Image source={menu} />
                    </View>
                </View>
                <View style={{ borderTopWidth: 5, borderBottomWidth: 5, borderColor: "#0c1826" }}>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 20 }}>
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
                <View style={{ marginHorizontal: 28, }}>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity><Text style={{ color: "white", paddingVertical: 18 }}>Spot</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: "white", paddingVertical: 18, paddingHorizontal: 20 }}>Gainers</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: "white", paddingVertical: 18 }}>New Listed</Text></TouchableOpacity>
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
    downArrow: {
        color: "#ED4E4E",
        fontSize: 7,
        fontWeight: '600',
        lineHeight: 10,
        fontStyle: "normal"
    },
    upArrow: {
        color: "#4ED56C",
        fontSize: 7,
        fontWeight: '600',
        lineHeight: 10,
        fontStyle: "normal"

    }

})

export default Home