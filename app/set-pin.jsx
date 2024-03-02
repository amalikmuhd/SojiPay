import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import AppButton from '../components/shared/AppButton';
import AppListText from '../components/shared/AppListText';
import { COLORS } from '../constants/color';
import OTPInput from '../components/shared/OtpInput';
import AppModal from '../components/shared/AppModal';

function AuthSetPin() {
  const [code, setCode] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    setModal(!modal);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>
          Set Transaction Pin{'\n'}
          <Text style={{ fontSize: 14, fontFamily: 'Nunito-Regular' }}>Please enter a new pin to secure your account</Text>
        </Text>

        <OTPInput label={'Create pin'} code={code} setCode={setCode} />

        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
          <AppListText text={"Didn't get code?"} buttonTitle={'Resend code'} path={'login'} />
        </View>
        <AppButton title={'Verify'} onPress={() => handleSubmit()} />
        {modal && (
          <AppModal
            title="Successfully"
            description={`You've successfully set your\ntransaction pin`}
            buttonTitle="Go to Homepage"
            modalVisible={modal}
            setModalVisible={setModal}
            callback={() => router.push('/home')}
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

export default AuthSetPin;
