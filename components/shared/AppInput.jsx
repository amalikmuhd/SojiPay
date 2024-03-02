import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/color';
import { Controller } from 'react-hook-form';
import IMAGES from '../../constants/images';

function AppInput({
  label,
  control,
  rules = {},
  name,
  placeholder,
  secureTextEntry,
  marginTop,
  leading,
  leadingTitle,
  trailingIcon,
  trailingIconEmpty,
  keyboard,
}) {
  const [show, setShow] = useState(false);
  return (
    <View style={{ marginTop: marginTop || 0 }}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <View style={styles.container}>
              {leading && (
                <View style={styles.leadingContainer}>
                  <Text style={styles.leadingTitle}>{leadingTitle}</Text>
                  <View style={styles.verticalLine} />
                </View>
              )}
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={name === 'password' || name === 'confirm-password' ? !show : show}
                keyboardType={keyboard}
              />
              {trailingIcon &&
                (show ? (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Image source={IMAGES.showIcon} style={styles.trailingIcon} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Image source={IMAGES.hideIcon} style={styles.trailingIcon} />
                  </TouchableOpacity>
                ))}

              {trailingIconEmpty && (
                <TouchableOpacity onPress={() => setShow(false)}>
                  <Image source={trailingIconEmpty} style={styles.trailingIcon} />
                </TouchableOpacity>
              )}
            </View>
            {error && <Text style={styles.errorLabel}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.borderColor,
  },
  label: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 5,
  },

  leadingContainer: { flexDirection: 'row', alignItems: 'center', gap: 10, marginLeft: 10 },
  leadingTitle: { fontFamily: 'Nunito-Medium' },
  verticalLine: { height: 30, backgroundColor: COLORS.borderColor, width: 0.9, marginRight: 0 },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  errorLabel: {
    marginTop: 5,
    color: COLORS.red,
    alignSelf: 'stretch',
  },
  trailingIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 20,
  },
});
export default AppInput;
