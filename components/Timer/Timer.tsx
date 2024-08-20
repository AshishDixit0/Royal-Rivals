import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time:any) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerBox: {
    width: 69,
    height: 22,
    backgroundColor: '#2C0045',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFB800',
    borderWidth: 2,
  },
  timerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Timer;
