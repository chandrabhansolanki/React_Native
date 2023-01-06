import React,{useState} from "react"
import {View, Text,StatusBar} from "react-native"


// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

const Market = () => {
    // const [hidden, setHidden] = useState(false);
    // const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    // const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

    return (
        <View>
             {/* <StatusBar
                animated={true}
                backgroundColor="#060D1D"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden} /> */}
            <Text>Market</Text>
        </View>
    )
}

export default Market