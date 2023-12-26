import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../constants/color';
import { Controller } from 'react-hook-form';

function AppInput({ label, control, rules = {}, name, placeholder, secureTextEntry, marginTop }) {
  return (
    <View style={{ marginTop: marginTop || 0 }}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />

            {error && <Text style={styles.errorLabel}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.grayShadow,
    borderRadius: 10,
  },

  errorLabel: {
    marginTop: 5,
    color: COLORS.red,
    alignSelf: 'stretch',
  },
});
export default AppInput;
