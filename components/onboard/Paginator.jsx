import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { COLORS } from '../../constants/color';

function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={index.toString()} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.Primary,
    marginHorizontal: 4,
  },
});

export default Paginator;
