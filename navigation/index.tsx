// src/navigation/AuthNavigator.tsx

import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from 'react-redux';
import { checkToken } from "@/store/AuthSlice";
import { RootState, AppDispatch } from "@/store";  // Import RootState and AppDispatch
import AuthStack from "./AuthStack";
import AccountStack from "./AccountStack";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();  // Use AppDispatch type
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  console.log('this is the auth: ', isAuthenticated);
  
  if (isAuthenticated === null) {
    // Optionally, you can show a loading screen while checking authentication
    return null;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="AccountStack"
          component={AccountStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
