import React,{useState} from "react"
import {Text, View, StyleSheet,StatusBar} from "react-native"

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Home = () => {
    const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[2]);

//   const changeStatusBarVisibility = () => setHidden(!hidden);

//   const changeStatusBarStyle = () => {
//     const styleId = STYLES.indexOf(statusBarStyle) + 1;
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[0]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };

//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };
    return (
<View >
<StatusBar
        animated={true}
        backgroundColor="#060D1D"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
        <View >

        </View>
</View>
    )
}

const styles = StyleSheet.create({
mainContainer: {
    flex:1,
    backgroundColor:"#060D1D"
}
})

export default Home