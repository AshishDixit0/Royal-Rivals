import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface KeypadButtonProps {
  label: string;
  onPress: () => void;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 18,
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 60,
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
});

export default KeypadButton;
