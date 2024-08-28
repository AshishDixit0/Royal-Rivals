import AnimatedLottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Modal, StyleSheet, View, Text } from 'react-native';

interface LoaderProps {
    show: any;
    msg: any;
}

export default function Loader({ show = false, msg }: LoaderProps) {
  useEffect(() => {
    if (show) {
      (ref as any)?.current?.play()
    }
  }, [show]);
    console.log('this is the show: ', show);
    
  const ref = useRef(null)
  return (

    <Modal visible={show} transparent={true} style={styles.modal}>
      <View
        style={styles.container}
      >
        <AnimatedLottieView
          source={require('@/assets/Animation/Loader.json')}
          autoPlay
          loop
          ref={ref}
          style={{
            height: 150,
            width: 150
          }}
        />

        <Text
          style={styles.text}
        >
          {msg || ''}
        </Text>

      </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#141d37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: '#fff'
  }
});