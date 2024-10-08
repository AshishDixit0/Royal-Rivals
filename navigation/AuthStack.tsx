import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "@/screen/Auth/Signup";
import OTP from "@/screen/Auth/OTP";
import GameScreen from "@/app/Screen/HomeScreen";
import { AuthStackParamList } from "./types";
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: "",
      }}
      component={SignUp}
      name={"SignUp"}
    />
    <Stack.Screen
      options={{ headerShown: false, headerTitle: "" }}
      component={OTP}
      name={"OTP"}
    />
  </Stack.Navigator>
);

export default AuthStack;
