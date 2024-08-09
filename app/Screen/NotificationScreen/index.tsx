import { View, Text, Image, ScrollView, } from 'react-native';
import { transactionsData } from "../../../screen/Account/data/TransactionHistoryData";
import { styles } from './styles';

export default function NotificationScreen({ navigation, route }:any) {
  const filteredTransactions = transactionsData.filter(
    (item) => item.status === "Successful"
  );

  return (
    <View style={styles.container}>
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
