import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useRef } from 'react';
// import RootLayout from './_layouts';
import onboard from './onboard';
import { Animated, FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import OnboardHeader from '../components/onboard/OnboardHeader';
import IMAGES from '../constants/images';
import { StatusBar } from 'expo-status-bar';
import OnboardSlide from '../data/OnboardSlide';
import OnboardBody from '../components/onboard/OnboardBody';
import { Stack } from 'expo-router';
import { UserDataContext } from '../contexts/UserData';

SplashScreen.preventAutoHideAsync();

function HomePage() {
  // const { data } = useContext(UserDataContext);
  // console.log(data?.name, 'name');

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={IMAGES.authBackground} resizeMode="cover" style={styles.image}>
        <OnboardHeader />
        <View style={styles.FlatContainer}>
          <FlatList
            data={OnboardSlide}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            bounces={false}
            renderItem={({ item }) => <OnboardBody item={item} scrollX={scrollX} />}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            viewabilityConfig={viewConfig}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  FlatContainer: {
    flex: 0.8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
});

export default HomePage;
