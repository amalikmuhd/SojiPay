import { useRef } from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OnboardBody from '../components/onboard/OnboardBody';
import OnboardSlide from '../data/OnboardSlide';
import IMAGES from '../constants/images';
import OnboardHeader from '../components/onboard/OnboardHeader';

const onboard = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={IMAGES.authBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <OnboardHeader />
        <View style={styles.FlatContainer}>
          <FlatList
            data={OnboardSlide}
            showsHorizontalScrollIndicator={false}
            horizontal
            bounces={false}
            renderItem={({ item }) => (
              <OnboardBody item={item} scrollX={scrollX} />
            )}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            viewabilityConfig={viewConfig}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

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

export default onboard;
