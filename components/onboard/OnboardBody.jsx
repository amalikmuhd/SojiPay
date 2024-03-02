import React, { useContext } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../constants/color';
import AppButton from '../shared/AppButton';
import Paginator from './Paginator';
import { router } from 'expo-router';
import { UserDataContext } from '../../contexts/UserData';

function OnboardBody({ item, scrollX }) {
  const { width } = useWindowDimensions();

  const { data, setData } = useContext(UserDataContext);

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
      <View style={{ marginBottom: 50 }}>
        <AppButton
          title="Create an Account"
          onPress={() => router.push('/register')}
        />
        <AppButton
          title="Login"
          background={COLORS.Secondary}
          titleColor={COLORS.Primary}
          marginTop={20}
          onPress={() => {
            setData({ ...data, name: 'Abdulmalik' });
            router.push('/login');
            // router.push('/home');
          }}
        />
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
