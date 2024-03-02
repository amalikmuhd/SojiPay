import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/shared/AppButton';
import { COLORS } from '../../constants/color';
import AppInput from '../../components/shared/AppInput';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Giftcard = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <StatusBar style="dark" />
      <View>
        <AppInput
          name="cardName"
          label={'Card name'}
          control={control}
          rules={{ required: 'First name is required' }}
          marginTop={8}
        />
        <AppInput
          name="cardNumber"
          label={'card number'}
          control={control}
          rules={{ required: 'Last name is required' }}
          marginTop={8}
        />

        <AppInput
          name="pin"
          label={'Pin/Security code'}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
          }}
          marginTop={8}
          trailingIcon
          secureTextEntry={false}
        />
        <AppInput
          name="cardValue"
          label={'Card Value'}
          control={control}
          rules={{ required: 'First name is required' }}
          marginTop={8}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <AppButton title={'Continue'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: 'white',
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

export default Giftcard;
