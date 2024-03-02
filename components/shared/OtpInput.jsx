import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { COLORS } from '../../constants/color';

const OTPInput = ({ code, setCode, secureTextEntry, label }) => {
  return (
    <>
      <Text style={{ marginBottom: 10, fontFamily: 'Nunito-Medium', color: COLORS.black }}>{label}</Text>
      <OTPInputView
        placeholderCharacter="0"
        placeholderTextColor={'#D8DADC'}
        autoFocusOnLoad={false}
        style={styles.optContainetSpace}
        pinCount={4}
        code={code}
        onCodeChanged={(text) => setCode(text)}
        secureTextEntry={secureTextEntry}
        codeInputFieldStyle={code?.length === 6 ? styles.underlineStyleFilledBase : styles.underlineStyleBase}
      />
      <View style={styles.hideContainer} />
    </>
  );
};

const styles = StyleSheet.create({
  optContainetSpace: {
    width: '100%',
    height: 64,
  },
  underlineStyleFilledBase: {
    width: 64,
    height: 64,
    borderWidth: 1,
    color: COLORS.black,
    borderColor: COLORS.Primary,
    fontSize: 30,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: COLORS.white,
  },
  underlineStyleBase: {
    width: 64,
    height: 64,
    borderWidth: 1,
    color: COLORS.black,
    borderColor: '#D8DADC',
    fontSize: 30,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: COLORS.white,
  },
  hideContainer: {
    height: 50,
    backgroundColor: COLORS.transparent,
    position: 'absolute',
    width: '100%',
    top: -4,
    bottom: 0,
  },
});

export default OTPInput;
