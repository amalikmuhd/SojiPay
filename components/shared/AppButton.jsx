import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/color';

const AppButton = ({ title, background, titleColor, marginTop, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: background || '#3170ED', marginTop: marginTop || 0 }}
      onPress={onPress}
    >
      <Text style={{ ...styles.text, color: titleColor || 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    backgroundColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    lineHeight: 19.6,
  },
});

export default AppButton;
