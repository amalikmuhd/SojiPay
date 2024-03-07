import { Stack } from "expo-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { UserDataProvider } from "../contexts/UserData";
import { NavigationContainer } from "@react-navigation/native";
const queryClient = new QueryClient();
import { ModalPortal } from "react-native-modals";

export default () => {
  return (
    <UserDataProvider>
      <QueryClientProvider client={queryClient}>
        {/* <NavigationContainer> */}
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false, gestureEnabled: false }}
          />
         
          <Stack.Screen
            name="home"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="register"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="verify-email"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="set-pin"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="forgot-password"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="create-new-password"
            options={{ headerShown: false, gestureEnabled: false }}
          />
           <Stack.Screen
            name="airtime"
            options={{ headerShown: true, gestureEnabled: false, title:'Airtime', }}
          />
          <Stack.Screen
            name="data"
            options={{ headerShown: true, gestureEnabled: false, title:'Data' }}
          />
          <Stack.Screen
            name="electricity"
            options={{ headerShown: true, gestureEnabled: false, title:'Electricity' }}
          />
          <Stack.Screen
            name="education"
            options={{ headerShown: true, gestureEnabled: false, title:'Education' }}
          />
          <Stack.Screen
            name="tv"
            options={{ headerShown: true, gestureEnabled: false, title:'Tv' }}
          />
          <Stack.Screen
            name="payment"
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack>
        <ModalPortal />
        {/* </NavigationContainer> */}
      </QueryClientProvider>
    </UserDataProvider>
  );
};
