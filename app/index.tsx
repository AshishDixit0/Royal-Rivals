import AuthStack from "@/navigation/AuthStack";
import AccountStack from "@/navigation/AccountStack";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from "@/store";

const queryClient = new QueryClient()

export default function HomeScreen() {
  // get auth token
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}> 
        <AuthStack />
      </QueryClientProvider>
    </Provider>
  );
}