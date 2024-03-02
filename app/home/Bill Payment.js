import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import TitleWithIcon from '../../components/shared/TitleWithIcon';
import BillPaymentList from '../../data/BillPaymentList';
import { COLORS } from '../../constants/color';

export default function Bills() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.billPaymentStyle}
      data={BillPaymentList}
      renderItem={({ item }) => (
        <View
          style={{
            borderColor: COLORS.borderColor,
            borderWidth: 0.16,
            paddingVertical: 10,
            borderRadius: 16,
            paddingHorizontal: 10,
          }}
        >
          <TitleWithIcon
            variant={true}
            title={item.title}
            icon={item.icon}
            trailing
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  billPaymentStyle: {
    flex: 1,
    padding: 20,
    gap: 20,
    width: '100%',
    backgroundColor: COLORS.white,
  },
});
