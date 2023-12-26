import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../../constants/color';

const AppListText = ({ text, buttonTitle, path }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 5 }}>
      <Text style={styles.bottomSubtitle}>{text}</Text>
      <Pressable onPress={() => router.push(`/${path}`)}>
        <Text style={styles.title}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.Primary,
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19.6,
  },
  bottomSubtitle: {
    color: COLORS.grayShadow,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19.6,
  },
});

export default AppListText;
