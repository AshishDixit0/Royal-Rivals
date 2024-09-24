import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from 'redux-persist/integration/react';
import AuthNavigator from "@/navigation";
import AccountStack from "@/navigation/AccountStack";
import { View, ActivityIndicator } from "react-native";  // Import ActivityIndicator

const queryClient = new QueryClient();

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<View><ActivityIndicator size="large" color="#0000ff" /></View>} // Replace null with ActivityIndicator
        persistor={persistor}
      >
        <QueryClientProvider client={queryClient}>
          {/* <AuthNavigator /> */}
          <AccountStack />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}