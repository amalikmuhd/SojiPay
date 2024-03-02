import React from 'react';
import IMAGES from '../../constants/images';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/color';

function OnboardHeader() {
  return (
    <View style={styles.topContainer}>
      <View />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Welcome to <Text style={{ color: COLORS.Primary }}>SojiPay</Text>
        </Text>
        <Text style={styles.description}>Solution to support your financial activities</Text>
      </View>
      <Image source={IMAGES.welcomeBackground} style={styles.welcome} />
    </View>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  welcome: {
    width: 250,
    height: 270,
    resizeMode: 'contain',
  },
});

export default OnboardHeader;
