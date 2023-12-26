import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Pressable onPress={() => router.replace('/login')}>
        <Text>Next Screen Set Pin</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
