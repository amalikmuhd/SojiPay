import { Text, View } from 'react-native';
import { COLORS } from '../../constants/color';

const OnboardText = () => {
  return (
    <View style={{ marginTop: 10, width: '100%', paddingHorizontal: 20 }}>
      <Text style={{ color: COLORS.white, fontSize: 32, marginBottom: 8 }}>
        Welcome to <Text style={{ color: COLORS.Primary }}>SojiPay</Text>
      </Text>
      <Text style={{ color: COLORS.white, fontSize: 16 }}>Solution to support your financial activities</Text>
    </View>
  );
};

export default OnboardText;
