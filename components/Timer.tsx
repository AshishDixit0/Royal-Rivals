import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TimerIcon } from './CommonSVG';

interface TimerProps {
    timeInMinutes: any;
    onTimeOver: any;
}

const Timer = ({ timeInMinutes, onTimeOver }: TimerProps) => {
  const [timer, setTimer] = useState(timeInMinutes * 60);

  useEffect(() => {
    if (timer === 0) {
      onTimeOver();
      return;
    }

    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <View
      style={styles.container}
    >
      <TimerIcon color={timer > 30 ?  '#fff' : '#FB6962'}/>
      <Text
        style={{
          ...styles.text,
          color : timer > 30 ?  '#fff' : '#FB6962'
        }}
      >
        {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </Text>
    </View>
  );
};

export default Timer;


const styles = StyleSheet.create({
  text: {
    fontSize : 20,
    fontFamily : "BungeeSpiceRegular"
  },
  container: {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap : 5
  },
});