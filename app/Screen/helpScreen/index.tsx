import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import GameHeader from '@/components/GameHeader/GameHeader';

const { width } = Dimensions.get('window');

export default function HelpScreen({ navigation, route }:any) {
  return (
    <View style={styles.container}>
      <GameHeader />
      <View style={styles.card}>
        <Text style={styles.text}>Help and Support</Text>
        <Image source={require("@/assets/images/help.png")} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999"
            selectionColor="black"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require("@/assets/images/search.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.help}>
        <View style={styles.helpCard}>
        <Image/>
        <View>
            <Text style={styles.text1}>How to Deposit Money</Text>
            <Text  style={styles.text2}>Your deposit of ₹500 .00 has been successfully processed</Text>
        </View>
        </View>
        <View style={styles.helpCard}>
        <Text style={styles.text1}>How to Withdraw Money</Text>
        <Text style={styles.text2}>Your deposit of ₹500 .00 has been successfully processed</Text>
        </View>
        <View style={styles.helpCard}>
        <Text  style={styles.text1}>How to Deposit Money</Text>
        <Text  style={styles.text2}>Your deposit of ₹500 .00 has been successfully processed</Text>
        </View>
      </View>
      <View style={styles.contact}>
      <Text style={styles.contactText1}>Contact Us</Text>
      <Text style={styles.contactText2}>For any help contact us at wecarezupee.in</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
    alignItems:"center"
  },
  card: {
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
    // height: 626,
    width:"100%",
    borderRadius:20,
    gap:20,
    paddingVertical:20,
    top:20
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    // marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
  },
  input: {
    height: 50,
    width: 306,
    borderRadius: 20,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 45, 
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  help:{
    display:"flex",
    gap:20
  },
  helpCard:{
    width:390,
    height:82,
    backgroundColor:Colors.header_Color,
    paddingHorizontal:20,
    paddingVertical:10,
  },
  text1:{
    fontSize:14,
    fontWeight:"700",
    color:"white"
  },
  text2:{
    fontSize:12,
    fontWeight:"400",
    color:"white"
  },
  contact:{
    alignItems: "center",
  },
  contactText1:{
    fontSize:24,
    fontWeight:"700",
    color:"white",
  },
  contactText2:{
    fontSize:14,
    fontWeight:"700",
    color:"white",
  }

});

