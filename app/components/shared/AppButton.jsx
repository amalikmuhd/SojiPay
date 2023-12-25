import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/color';

const AppButton = ({ title, background, titleColor, marginTop }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: background || '#3170ED', marginTop: marginTop || 0 }}>
      <Text style={{ ...styles.text, color: titleColor || 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 26,
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
