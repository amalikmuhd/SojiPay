import { StyleSheet, Text, View } from 'react-native';
import Onboard from './app/screens/Onboard';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./app/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('./app/assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('./app/assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./app/assets/fonts/Nunito-Bold.ttf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return <Onboard />;
  // return (
  //   <View style={styles.container}>
  //     <Text style={{ fontFamily: 'Nunito-Bold' }}>Current state is</Text>
  //     <Text>Current state is</Text>
  //     <Text>Current state is</Text>
  //     {/* <StatusBar style="auto" /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
