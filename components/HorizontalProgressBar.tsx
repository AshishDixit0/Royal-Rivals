import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface HorizontalProgressBarProps {
    onFinish: any;
    playerType: any;
}

const HorizontalProgressBar = ({ onFinish, playerType }: HorizontalProgressBarProps) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000, // 5 seconds
      useNativeDriver: false,
    }).start(() => onFinish && onFinish());
  }, [progress, onFinish]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Width of the progress bar container
    height: 7, // Height of the progress bar
    backgroundColor: '#ccc',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius : 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff', // Change this to adjust inner view color
  },
});

export default HorizontalProgressBar;
