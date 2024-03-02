import { Stack } from 'expo-router';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { UserDataProvider } from '../contexts/UserData';

const queryClient = new QueryClient();

export default () => {
  return (
    <UserDataProvider>
      <QueryClientProvider client={queryClient}>
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
        </Stack>
      </QueryClientProvider>
    </UserDataProvider>
  );
};
