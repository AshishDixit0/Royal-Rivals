import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = () => {
  return (
    <TouchableOpacity style={styles.card}>
        <View style={styles.innercard}>
        <Text style={styles.title}>4 Player</Text>
        </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Prize</Text>
          <View style={styles.boxvalue}>
          <Text style={styles.infoValue}>₹ 80</Text>
          </View>
          
        </View>
        <View style={styles.info1}>
          <Text style={styles.infoText1}>1 Winner</Text>
          <Text style={styles.timer}>00:20</Text>
          <Text style={styles.matchStart}>Match Starts In</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Entry Fee</Text>
          <View style={styles.boxvalue}>
          <Text style={styles.infoValue}>₹ 30</Text> 
          </View>
          
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 359,
    height: 144,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: Colors.golden,
    borderRadius: 20,
    paddingBottom: 10,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50 -10, // Assuming this component starts from the top, otherwise adjust the margin as needed
    marginLeft: 17,
    // elevation: 5,
    // shadowColor: Colors.golden,
  },
  innercard:{
 backgroundColor:Colors.header_Color,
 width: 359,
 justifyContent: 'center',
 alignItems: 'center',
 borderTopLeftRadius:20,
 borderTopRightRadius:20,

  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // fontFamily:"Aclonica",
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal:10,
  },
  info: {
    justifyContent:"center",
    alignItems: 'center',
    display:"flex",
    gap:5
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
  },
  infoText1: {
    color: Colors.golden,
    fontSize: 14,
  },
  infoValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timer: {
    color: '#EF9D1F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  matchStart: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 10,
  },
  boxvalue:{
    backgroundColor:Colors.header_Color,
    width:85,
    height:33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  },
  info1:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center"
  }
});

export default Card;
