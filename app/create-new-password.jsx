import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppListText from '../components/shared/AppListText';
import AppButton from '../components/shared/AppButton';
import { COLORS } from '../constants/color';
import AppInput from '../components/shared/AppInput';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import AppModal from '../components/shared/AppModal';
import { useState } from 'react';

const ForgotPassword = () => {
  const { control, handleSubmit, watch } = useForm();
  const [modal, setModal] = useState(false);
  const pwd = watch('password');

  const onSignInPressed = (data) => {
    const { email } = data;
    setModal(!modal);
    // router.push({ pathname: 'v', params: { email } });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <View style={{ marginTop: 30 }} />
        <View>
          <Text style={styles.title}>{`Create New\nPassword`}</Text>
        </View>
        <View style={{ marginBottom: 20 }} />
        <View>
          <AppInput
            name="password"
            label={'New password'}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: { value: 6, message: 'Password should be minimum 6 characters long' },
            }}
            marginTop={8}
            trailingIcon
            secureTextEntry={false}
          />
          <View style={{ marginBottom: 20 }} />
          <AppInput
            name="confirm-password"
            label={'Confirm new password'}
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
        </View>
        <View />
      </View>

      {modal && (
        <AppModal
          title="Successfully"
          description={`You’ve successfully create new\npassword for your SojiPay account `}
          buttonTitle="Back to login"
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.push('/login')}
        />
      )}
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

export default ForgotPassword;
