import {View, Text, StyleSheet, Platform } from 'react-native';



export default function HomeScreen() {
  return (
<View style={styles.container}>
 <Text>hello wolrd</Text> 
</View>
  );
}

const styles = StyleSheet.create({
 container:{
flex:1,
justifyContent:"center",
alignItems:"center"
 }
});
