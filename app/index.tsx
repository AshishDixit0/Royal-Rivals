import Button from '@/components/Button/Button';
import {View, Text, StyleSheet, Platform } from 'react-native';

const fun=()=>{
  return(
    console.log("hello")
  )
}

export default function HomeScreen() {
  return (
<View style={styles.container}>
 <Text>hello wolrd</Text> 
 <Button 
 title='hello'
 onPress={fun}
 containerStyles={{width:300}}
 />
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
