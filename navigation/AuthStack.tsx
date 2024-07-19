import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import SignUp from "@/screen/Auth/Signup";
import OTP from "@/screen/Auth/OTP";
import GameScreen from "@/app/Screen/HomeScreen/Game";
import GameSelectScreen from "@/app/Screen/GameSelection/index";
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
       <Stack.Screen
        options={{ headerShown: false, headerTitle: "" }}
        component={GameScreen}
        name={"Gamescreen"}
      />
       <Stack.Screen
        options={{ headerShown: false, headerTitle: "" }}
        component={GameSelectScreen}
        name={"GameSelectScreen"}
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
