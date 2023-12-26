import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function VerifyEmail() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <Text>Verify Email Screen</Text>
      <Pressable onPress={() => router.push('/set-pin')}>
        <Text>Next Screen Set Pin</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VerifyEmail;
