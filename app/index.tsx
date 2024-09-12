import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import AuthNavigator from "@/navigation";
import AccountStack from "@/navigation/AccountStack";

const queryClient = new QueryClient();

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <AuthNavigator /> */}
        <AccountStack/>
      </QueryClientProvider>
    </Provider>
  );
}
