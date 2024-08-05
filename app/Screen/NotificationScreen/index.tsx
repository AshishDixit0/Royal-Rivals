import React, {useState, useEffect } from 'react';
import { View, Text, Animated, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import Card from '@/components/GameCard/Card';
import GameHeader from '@/components/GameHeader/GameHeader';
import { transactionsData } from "../../../screen/Account/data/TransactionHistoryData";



const { width } = Dimensions.get('window');
export default function NotificationScreen({ navigation, route }:any) {


  // const [selectedTab, setSelectedTab] = useState("Deposit");

  const filteredTransactions = transactionsData.filter(
    (item) => item.status === "Successful"
  );



 

  // const handleSignUp = async () => {
  //   navigation.navigate('NotificationScreen');
  // };

  return (
    <View style={styles.container}>
      <GameHeader />
      <View style={styles.title}>
        <Image source={require("@/assets/images/bell.png")} style={styles.bellIcon}/>
        <Text style={styles.status}>Notifications</Text>
        </View>
        <View style={styles.titleInner}>
          <View style={styles.mark}>
            <Text style={styles.newText}>New</Text>
            <Image source={require("@/assets/images/point.png")}/>
          </View>
          <Text style={styles.newText}>Mark all as Read</Text>
        </View>
     

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredTransactions.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image
                source={require("@/assets/images/walletLogo.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.status}>{item.status === 'Successful' ? 
      (item.type === 'Withdrawl' ? 'Withdrawl Successful' : 'Deposit Successful') 
      : item.status}</Text>
              <Text style={styles.type}>Your processed {item.type} of {item.amount} has been successfully</Text>
              {/* <Text style={styles.dateTime}>
                {item.time} {item.date}
              </Text> */}
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.timeContainer}>
                <Image source={require("@/assets/images/eclipse.png")}/>
              <Text style={styles.dateTime}>{item.time}</Text>
              </View>
            
            <Text style={styles.date}>{item.date}</Text>
            </View>
            

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
  },
  title:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    padding:10
  },
  titleInner:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:10
  },
  mark:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
newText:{
  color: "white",
  fontSize: 12,
  fontWeight: "500",
},
  scroll: {
    flex: 1,
    marginTop: 20,
  },
  banner: {
    height: 270,
    width: width,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomRightRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logotext: {
    height: 225,
    width: 300,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
    marginBottom: "44%",
    paddingTop:1,
    backgroundColor:Colors.BACKGROUND_COLOR,
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    marginTop: "30%",
    marginBottom: "5%",
  },
  tabButton: {
    borderRadius: 20,
    paddingVertical: "2%",
    paddingHorizontal: "10%",
  },
  activeTabButton: {
    backgroundColor: Colors.golden,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: Colors.purpleNavigation,
    borderRadius: 20,
    // paddingVertical: "5%",
    paddingTop:5,
    paddingHorizontal: "5%",
    marginBottom: "2%",
    width: "100%",
    height:82,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginRight: "5%",
    top:15
  },
  icon: {
    width: 47, // Adjusted size for the icon
    height: 46,
  },
  detailsContainer: {
    flex: 1,
  },
  status: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  type: {
    color: "white",
    fontSize: 12,
    fontWeight:"400",
  },
  dateTime: {
    color: "white",
    fontSize: 12,
    fontWeight:"400",
  },
  amount: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  bellIcon:{
    width:15,
    height:15,

  },
  dateContainer:{},
  date:{
    // top:-10
    color: "white",
    fontSize: 12,
    fontWeight:"400",
    paddingLeft:15
  },
  timeContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:5,
  }
});
