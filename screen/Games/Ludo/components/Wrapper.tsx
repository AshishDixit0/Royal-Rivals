import { deviceHeight, deviceWidth } from "@/constants/scaling";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BG = require('@/assets/images/backgroundApp.png');

interface WrapperProps {
  children: any;
  style: any;
}

export default function Wrapper({ children, style }: WrapperProps) {
  return (
    <ImageBackground source={BG} resizeMode="cover" style={styles.container}>
        <SafeAreaView style={[styles.safeArea, {...style}]}>
            {children}
        </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safeArea: {
        width: deviceWidth,
        height: deviceHeight,
        justifyContent: 'center',
        alignItems: 'center',
    }
})