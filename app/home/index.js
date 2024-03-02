import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppListText from '../../components/shared/AppListText';
import IMAGES from '../../constants/images';
import { COLORS } from '../../constants/color';
import formatDate from '../../utils/FormatDate';
import TitleWithIcon from '../../components/shared/TitleWithIcon.jsx';
import BillPayment from '../../data/BillPaymentSections';

export default function Overview() {
  // const { data, setData } = useContext(UserDataContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.homeBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.innerTop}>
          <View>
            <AppListText
              text={'Hello, Abdulmalik 👋🏾'}
              textColor={COLORS.white}
              fontFamily={'Nunito-Bold'}
              marginBottom={3}
            />
            <AppListText
              text={`Today ${formatDate.formatLong()}`}
              textColor={COLORS.white}
              fontSize={14}
            />
          </View>

          <Pressable>
            <Image
              source={IMAGES.notificationIcon}
              style={styles.notification}
            />
          </Pressable>
        </View>

        <View style={styles.FlatContainer}>
          <View style={styles.secondContainer}>
            <TitleWithIcon
              variant={true}
              icon={IMAGES.giftIcon}
              title="Sell Gift Card"
              titleFontFamily="Nunito-Medium"
            />
            <TitleWithIcon
              variant={true}
              icon={IMAGES.phoneIcon}
              title="Buy Airtime"
              titleFontFamily="Nunito-Medium"
            />
          </View>

          <View style={styles.thirdContainer}>
            <AppListText
              text={'Bill payment'}
              textColor={COLORS.black}
              fontFamily={'Nunito-Medium'}
              marginBottom={20}
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={styles.billPaymentStyle}
              data={BillPayment}
              renderItem={({ item }) => (
                <TitleWithIcon title={item.title} icon={item.icon} />
              )}
            />
          </View>

          <View style={styles.fouthCountainer}>
            <AppListText
              text={'Transaction history'}
              textColor={COLORS.black}
              fontFamily={'Nunito-Medium'}
              marginBottom={10}
            />
            <FlatList
              data={[]}
              contentContainerStyle={styles.transactionStyle}
              renderItem={({ item }) => <Text>data</Text>}
              ListEmptyComponent={() => (
                <View style={styles.emptpStateContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={IMAGES.emptyIcon}
                    resizeMode="contain"
                  />
                  <AppListText
                    text={
                      'No history yet, transaction history will appear here if you have one.'
                    }
                    fontFamily={'Nunito-Medium'}
                    textAlign="center"
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  innerTop: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  FlatContainer: {
    flex: 0.8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  notification: {
    width: 24,
    height: 24,
  },

  secondContainer: {
    backgroundColor: 'white',
    marginTop: -30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 1.0,

    elevation: 0.8,
  },

  thirdContainer: {
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 1.0,

    elevation: 0.8,
  },
  billPaymentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  fouthCountainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  emptpStateContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 20,
  },
  imageStyle: {
    width: 145,
    resizeMode: 'contain',
    height: 145,
    marginBottom: 20,
  },

  transactionStyle: {
    justifyContent: 'center',
    flex: 1,
  },
});
