import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="register" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="verify-email" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="set-pin" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="login" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="home" options={{ headerShown: false, gestureEnabled: false }} />
    </Stack>
  );
};
