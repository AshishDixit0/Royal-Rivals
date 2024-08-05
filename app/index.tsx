import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
import AuthNavigator from "@/navigation";

const queryClient = new QueryClient();

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthNavigator />
      </QueryClientProvider>
    </Provider>
  );
}
