import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountStackParamList } from "./types";
import Details from '../screen/Account/details';
import Account from "@/screen/Account";
import AccountHeader from "@/components/AccountHeader";
import AccountScreen from "@/screen/Account";
import AboutUs from "@/screen/Account/about-us";
import Settings from "@/screen/Account/settings";
import Wallet from "@/screen/Account/Wallet";
import Withdraw from "@/screen/Account/Wallet/withdraw";
import TransactionHistory from "@/screen/Account/Wallet/transaction-history";

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountScreen navigation={navigation} title="Accounts" showBarsIcon={true} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Account}
          name={"Account"}
          
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="Details" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Details}
          name={"Details"}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="About Us" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={AboutUs}
          name={"AboutUs"}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="Settings" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Settings}
          name={"Settings"}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="My Balance" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Wallet}
          name={"Wallet"}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="Withdraw" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Withdraw}
          name={"Withdraw"}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => <AccountHeader navigation={navigation} title="Transaction History" showBarsIcon={false} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={TransactionHistory}
          name={"TransactionHistory"}
        />
      </Stack.Navigator>
    );
  };

export default AccountStack;
