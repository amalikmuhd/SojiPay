import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import AppListText from '../components/shared/AppListText';
import AppButton from '../components/shared/AppButton';
import { COLORS } from '../constants/color';
import AppInput from '../components/shared/AppInput';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { listTweets } from '../lib/auth';
import { useQuery } from '@tanstack/react-query';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');

  const onSignInPressed = (data) => {
    const { email, firstName } = data;
    router.push({ pathname: 'verify-email', params: { email, firstName } });
  };

  const { data, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: listTweets });

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={'red'} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  console.log(data?.slice(1), 'tweets');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <View />
        <View />
        <View>
          <Text style={styles.title}>
            Create Your{'\n'}
            <Text style={{ color: COLORS.Primary }}>SojiPay </Text>
            Account
          </Text>
        </View>
        <View>
          <AppInput
            name="firstName"
            label={'First Name'}
            control={control}
            rules={{ required: 'First name is required' }}
            marginTop={8}
          />
          <AppInput
            name="last-name"
            label={'Last Name'}
            control={control}
            rules={{ required: 'Last name is required' }}
            marginTop={8}
          />
          <AppInput
            name="email"
            label={'Email'}
            control={control}
            rules={{
              required: 'Email is required',
              pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
            }}
            marginTop={8}
            keyboard="email-address"
          />
          <AppInput
            name="phone-number"
            label={'Phone number'}
            control={control}
            rules={{ required: 'Phone number is required' }}
            marginTop={8}
            leading
            leadingTitle="+234"
            keyboard="number-pad"
          />
          <AppInput
            name="password"
            label={'Create password'}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: { value: 6, message: 'Password should be minimum 6 characters long' },
            }}
            marginTop={8}
            trailingIcon
            secureTextEntry={false}
          />
          <AppInput
            name="confirm-password"
            label={'Confirm password'}
            control={control}
            rules={{
              validate: (value) => value === pwd || 'Password do not match',
            }}
            marginTop={8}
            trailingIcon
            // secureTextEntry={false}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <AppButton title={'Continue'} onPress={handleSubmit(onSignInPressed)} />
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <AppListText text={'Already have an account?'} buttonTitle={'Login'} path={'login'} />
          </View>
        </View>
        <View />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
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
});

export default Register;
