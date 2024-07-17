import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountStackParamList } from "./types";
import Details from '../screen/Account/details';
import Account from "@/screen/Account";
import AccountHeader from "@/components/AccountHeader";

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
    return (
      <Stack.Navigator>
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
            header: () => <AccountHeader navigation={navigation} title="Accounts" showBarsIcon={true} />,
            headerTransparent: true,
            headerTitle: "",
          })}
          component={Account}
          name={"Account"}
        />
      </Stack.Navigator>
    );
  };

export default AccountStack;
