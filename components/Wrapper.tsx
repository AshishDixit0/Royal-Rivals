import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { height, widht } from '@/constants/Scaling';

interface WrapperProps {
    children: React.ReactNode | any;
    style?: any;
}

export default function Wrapper({ children, style }: WrapperProps) {
  return (
    <ImageBackground source={require('@/assets/images/bgGame.png')} resizeMode='cover' style={styles.container}>
        <SafeAreaView style={[styles.safeArea, {...style}]}>
            {children}
        </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safeArea: {
        height: height,
        width: widht,
        justifyContent: 'center',
        alignItems: 'center'
    }
})