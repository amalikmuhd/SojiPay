import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/shared/AppButton';
import AppListText from '../components/shared/AppListText';
import { COLORS } from '../constants/color';
import OTPInput from '../components/shared/OtpInput';
import AppModal from '../components/shared/AppModal';

function VerifyEmail() {
  const { email, firstName } = useLocalSearchParams();
  const [code, setCode] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    setModal(!modal);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>
          Verify Email{'\n'}
          <Text style={{ fontSize: 14, fontFamily: 'Nunito-Regular' }}>
            {`Hey ${firstName?.toLowerCase()}, verify your email by entering the code sent to ${email?.toLowerCase()}`}
          </Text>
        </Text>

        <OTPInput code={code} setCode={setCode} />

        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
          <AppListText text={"Didn't get code?"} buttonTitle={'Resend code'} path={'login'} />
        </View>
        <AppButton title={'Verify'} onPress={() => handleSubmit()} />
        {modal && (
          <AppModal
            title="Verified Successfully"
            description={`Your email has been successfully{'\n'}verified`}
            buttonTitle="Continue"
            modalVisible={modal}
            setModalVisible={setModal}
            callback={() => router.push('/set-pin')}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    marginTop: 40,
    marginBottom: 40,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default VerifyEmail;
