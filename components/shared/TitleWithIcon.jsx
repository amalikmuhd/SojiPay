import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/color';
import { Entypo } from '@expo/vector-icons';

export default function TitleWithIcon({
  variant,
  icon,
  title,
  titleFontFamily,
  trailing,
  onPress
}) {
  return (
    <Pressable
      style={{
        flexDirection: trailing ? 'row' : '',
        justifyContent: trailing ? 'space-between' : '',
        alignItems: trailing ? 'center' : 'flex-start',
        width: trailing ? '100%' : 'auto',
      }}
      onPress={onPress}
    >
      <View
        style={{
          ...styles.container,
          flexDirection: variant ? 'row' : 'column',
          alignItems: variant ? 'center' : 'flex-start',
          gap: variant ? 10 : 5,
        }}
      >
        <Image style={styles.icon} source={icon} />
        <Text
          style={{
            ...styles.title,
            fontFamily: titleFontFamily || 'Nunito-Regular',
          }}
        >
          {title}
        </Text>
      </View>
      {trailing && <Entypo name="chevron-thin-right" size={16} color="black" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
    // backgroundColor: 'red',
    // width: 100,
  },
  icon: {
    width: 32,
    height: 32,
  },

  title: {
    color: COLORS.black,
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19.6,
  },
});
