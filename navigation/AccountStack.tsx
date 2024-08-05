import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screen/Account/details";
import Account from "@/screen/Account";
import AccountHeader from "@/components/AccountHeader";
import AboutUs from "@/screen/Account/about-us";
import Settings from "@/screen/Account/settings";
import Wallet from "@/screen/Account/Wallet";
import Withdraw from "@/screen/Account/Wallet/withdraw";
import TransactionHistory from "@/screen/Account/Wallet/transaction-history";
import KYC from "@/screen/Account/KYC";
import Deposit from "@/screen/Account/Wallet/deposit";
import { AccountStackParamList } from "./types";
import GameSelectScreen from "@/app/Screen/GameSelection";
import GameScreen from "@/app/Screen/HomeScreen/Game";
import GameHeader from "@/components/GameHeader/GameHeader";
import LudoScreen from "@/app/Screen/ludoScreen";

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => <GameHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitle: "",
      })}
      component={GameScreen}
      name={"Home"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => <GameHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitle: "",
      })}
      component={GameSelectScreen}
      name={"GameSelect"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => <GameHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitle: "",
      })}
      component={LudoScreen}
      name={"LudoScreen"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <Account
            navigation={navigation}
            title="Accounts"
            showBarsIcon={true}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Account}
      name={"Account"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="Details"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Details}
      name={"Details"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="About Us"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={AboutUs}
      name={"AboutUs"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="Settings"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Settings}
      name={"Settings"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="My Balance"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Wallet}
      name={"Wallet"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="Withdraw"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Withdraw}
      name={"Withdraw"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="Transaction History"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={TransactionHistory}
      name={"TransactionHistory"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="KYC"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={KYC}
      name={"KYC"}
    />
    <Stack.Screen
      options={({ navigation }) => ({
        header: () => (
          <AccountHeader
            navigation={navigation}
            title="Deposit"
            showBarsIcon={false}
          />
        ),
        headerTransparent: true,
        headerTitle: "",
      })}
      component={Deposit}
      name={"Deposit"}
    />
  </Stack.Navigator>
);

export default AccountStack;
