import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../../constants/color';

const AppListText = ({
  text,
  buttonTitle,
  path,
  textColor,
  fontFamily,
  marginBottom,
  fontSize,
  textAlign,
}) => {
  return (
    <View
      style={{ flexDirection: 'row', gap: 5, marginBottom: marginBottom || 0 }}
    >
      <Text
        style={{
          ...styles.bottomSubtitle,
          color: textColor || COLORS.grayShadow,
          fontFamily: fontFamily || 'Nunito-Regular',
          fontSize: fontSize || 16,
          textAlign: textAlign || 'left',
        }}
      >
        {text}
      </Text>
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
