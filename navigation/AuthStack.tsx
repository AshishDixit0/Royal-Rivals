import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import SignUp from "@/screen/Auth/Signup";
import OTP from "@/screen/Auth/OTP";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
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
      {/* <Stack.Screen
          options={{ headerShown: false, headerTitle: "" }}
          component={RegisterScreen}
          name={"Register"}
        /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
