import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
    title: any,
    onPressFunc: any,
    type: any,
    width: any,
    disabled: any
}

export default function Button({ title, onPressFunc, type, width, disabled }: ButtonProps) {
  const _width = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      style={{
        ...styles.secondryButton,
        width: width || _width - 40,
        opacity: disabled ? 0.7 : 1,
      }}
      onPress={() => {
        onPressFunc()
      }}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.secondryButtonText,
        }}
      >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    color: "white"
  },
  secondryButton: {
    backgroundColor: "#393f87",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10
  },
  secondryButtonText: {
    fontFamily: "PoppinsBold",
    fontSize: 17,
    color: "#ffff"
  },
  ternaryButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#3f458e',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10
  },
  ternaryButtonText: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    fontWeight: 'bold',
    color: "#3f458e"
  },
});