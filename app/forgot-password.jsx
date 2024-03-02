import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppListText from '../components/shared/AppListText';
import AppButton from '../components/shared/AppButton';
import { COLORS } from '../constants/color';
import AppInput from '../components/shared/AppInput';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { useState } from 'react';
import AppModal from '../components/shared/AppModal';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPassword = () => {
  const { control, handleSubmit, watch } = useForm();
  const [modal, setModal] = useState(false);
  const [takeEmail, setTakeEmail] = useState('');
  const onSignInPressed = (data) => {
    const { email } = data;
    setTakeEmail(email);
    setModal(!modal);
  };

  return (
    <ScrollView>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <View style={{ marginTop: 30 }} />
        <View>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter the email attached to this account</Text>
        </View>
        <View style={{ marginBottom: 20 }} />
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
        </View>
        {/* <View style={{ alignItems: 'flex-end', marginTop: 26 }}>
          <AppListText text={"Didn't get code?"} buttonTitle={'Resend code'} path={'login'} />
        </View> */}
        <View style={{ marginTop: 46 }}>
          <AppButton title={'Continue'} onPress={handleSubmit(onSignInPressed)} />
        </View>
        <View />
      </View>

      {modal && (
        <AppModal
          title="Check Your Email"
          description={`We have sent password recovery link to\nyour email, check your mail for link to\ncontinue`}
          buttonTitle="Go to mail"
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.push({ pathname: 'create-new-password', params: { email: takeEmail } })}
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
  subtitle: {
    marginTop: 6,
    color: COLORS.subtitle,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});

export default ForgotPassword;
