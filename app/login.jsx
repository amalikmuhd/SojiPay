import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppListText from '../components/shared/AppListText';
import AppButton from '../components/shared/AppButton';
import { COLORS } from '../constants/color';
import AppInput from '../components/shared/AppInput';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import IMAGES from '../constants/images';
import { UserDataContext } from '../contexts/UserData';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  // console.warn('see data');

  const { control, handleSubmit, watch } = useForm();

  const [isChecked, setChecked] = useState(false);

  const onSignInPressed = (data) => {
    const { email, password } = data;
    router.push({ pathname: 'home', params: { email, password } });
  };

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={styles.root}>
          <View style={styles.topHeader}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Enter your email and password to continue</Text>
          </View>
          <View>
            <AppInput
              name="email"
              label={'Email'}
              control={control}
              placeholder={'example@gmail.com'}
              rules={{
                required: 'Email is required',
                pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
              }}
              marginTop={8}
              keyboard="email-address"
            />
            <View style={{ marginBottom: 20 }} />
            <AppInput
              name="password"
              label={'Password'}
              control={control}
              placeholder={'*********'}
              rules={{
                required: 'Password is required',
                minLength: { value: 6, message: 'Password should be minimum 6 characters long' },
              }}
              marginTop={8}
              trailingIcon
              secureTextEntry={false}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.rowContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={(value) => {
                  setChecked(value);
                }}
                color={isChecked ? COLORS.Primary : COLORS.grayShadow}
              />
              <AppListText text={'Remember me'} />
            </View>

            <AppListText text={''} buttonTitle={'Forgot Password?'} path={'forgot-password'} />
          </View>

          <View style={{ marginTop: 50 }}>
            <AppButton title={'Login'} onPress={handleSubmit(onSignInPressed)} />
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <AppListText text={'Don’t have an account?'} buttonTitle={'Create one'} path={'register'} />
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={IMAGES.fingerIcon} style={styles.image} />
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <AppListText text={'Login with fingerprint?'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },

  topHeader: {
    marginTop: -20,
    marginBottom: 20,
  },

  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  title: {
    color: COLORS.black,
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    marginTop: 40,
  },

  subtitle: {
    color: COLORS.subtitle,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },

  row: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
  },

  checkbox: {
    borderWidth: 1.8,
    borderRadius: 10,
    borderColor: COLORS.subtitle,
    marginRight: 6,
  },

  image: {
    width: 45,
    height: 45,
  },
});

export default Register;
