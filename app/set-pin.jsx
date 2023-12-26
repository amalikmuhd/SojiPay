import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function AuthSetPin(props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/login')}>
        <Text>Login Screen</Text>
      </Pressable>
      <Text>Auth Set Pin</Text>
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

export default AuthSetPin;
