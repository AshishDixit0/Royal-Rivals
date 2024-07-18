import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

interface CardProps {
  title: string;
  isChecked: boolean;
  onPress: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, isChecked, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Icon name="check" size={width * 0.04} color={Colors.checkboxBorder} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.accountsPurplePage,
    padding: width * 0.05,
    borderRadius: 20,
    height: height * 0.1,
    width: '100%',
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  checkbox: {
    width: width * 0.08,
    height: width * 0.08,
    borderWidth: 2,
    borderColor: Colors.checkboxBorder,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: Colors.purpleNavigation,
  },
});

export default CardComponent;
