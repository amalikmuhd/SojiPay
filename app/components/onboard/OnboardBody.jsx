import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../constants/color';
import AppButton from '../shared/AppButton';
import Paginator from './Paginator';

function OnboardBody({ item, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.bottomContainer, width: width }}>
      <View style={{ width: '100%' }}>
        <Paginator data={[0, 1]} scrollX={scrollX} />
      </View>
      <View />
      <View>
        <Text style={styles.bottomTitle}>{item.title}</Text>
        <Text style={styles.bottomSubtitle}>{item.description}</Text>
      </View>
      <View style={{ marginBottom: 40 }}>
        <AppButton title="Create an Account" />
        <AppButton title="Login" background={COLORS.Secondary} titleColor={COLORS.Primary} marginTop={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  bottomTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    lineHeight: 33.6,
    letterSpacing: 0.48,
    color: COLORS.black,
  },
  bottomSubtitle: {
    color: COLORS.grayShadow,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 19.6,
  },

  icon: {
    marginTop: 40,
    width: '100%',
    height: 17,
  },
});

export default OnboardBody;
