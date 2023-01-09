import React, { useState } from "react"
import { View, Text, StatusBar, StyleSheet, ScrollView, TextInput, Image, Dimensions, FlatList } from "react-native"

import { SearchIcon, BitcoinImage, BitcoinGraph, BitcoinDownGraph, BitcoinUpArrow, BitcoinDownArrow } from '../../../Images/Images'


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


const Market = () => {

    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <View style={{ borderRadius: 5, backgroundColor: "black", marginRight: 5, marginBottom:5 }}>
                <View style={{ height: 79, width: 157, paddingHorizontal: 10, paddingVertical: 8 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image style={{ width: 19, height: 19, resizeMode: "contain" }} source={item?.bitcoinImage} />
                        <Image style={{ width: 47, height: 21, resizeMode: "contain" }} source={item?.bitcoinPercent < 0 ? item?.bitcoinGraph : item?.bitcoinGraph} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 11, alignItems: "center" }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 10, fontWeight: '600', fontStyle: "normal" }}>{item?.bitcoinName}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 30, height: 17 }}>
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
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.searchContainer} >
                        <Image source={SearchIcon} style={styles.searchIcon} />
                        <TextInput style={styles.search} placeholder="Search for markets" placeholderTextColor="grey" />
                    </View>
                    <View style={styles.TrendingContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Trending</Text>
                    </View>
                    <View style={{paddingLeft:28 }}>
                        <FlatList
                            horizontal
                            data={data}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false} />
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
        // 
    },
    container: {
        paddingTop: 25,
      
        backgroundColor: "#0c1826"
    },
    search: {
        borderWidth: 1,
        borderColor: "grey",
        height: Dimensions.get("window").height / 16,
        borderRadius: 38,
        color: "grey",
        fontSize: 14,
        paddingLeft: 22,
        fontWeight: "600"
    },
    searchContainer: {
        position: "relative",
        paddingHorizontal: 28,

    },
    searchIcon: {
        position: "absolute",
        right: 48,
        top: 14,
        height: 20,
        width: 20,
        resizeMode: "contain",
        opacity: 0.6
    },
    TrendingContainer: {
        paddingHorizontal: 28,
        marginVertical: 12,
       
    },

})

export default Market