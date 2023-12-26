import Onboard from './app/screens/Onboard';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./app/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('./app/assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('./app/assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./app/assets/fonts/Nunito-Bold.ttf'),
  });

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
}
