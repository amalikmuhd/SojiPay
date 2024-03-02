import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppListText from '../../components/shared/AppListText';
import IMAGES from '../../constants/images';
import { COLORS } from '../../constants/color';
import TitleWithIcon from '../../components/shared/TitleWithIcon.jsx';
import ProfileData from '../../data/ProfileData';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const [switchState, setSwitch] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.homeBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.innerTop}>
          <View style={styles.innerContainer}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
            <AppListText
              text={'Profile'}
              textColor={COLORS.white}
              fontFamily={'Nunito-Bold'}
            />

            <MaterialIcons name="edit" size={24} color={COLORS.white} />
          </View>

          <View style={styles.innerSeconContainer}>
            <Image source={IMAGES.avatarIcon} style={styles.avaterStyle} />
            <View style={styles.middleTextStyle}>
              <AppListText
                text={'Abdulmalik Muhammad'}
                textColor={COLORS.white}
                fontFamily={'Nunito-Bold'}
              />
              <AppListText
                text={`amalikmuhdd@gmail.com`}
                textColor={COLORS.white}
                fontSize={14}
              />
              <AppListText
                text={`+234 8146191761`}
                textColor={COLORS.white}
                fontSize={14}
              />
            </View>
          </View>
        </View>

        <View style={styles.FlatContainer}>
          <View style={styles.thirdContainer}>
            <View style={styles.innerThirdContainer}>
              <TouchableOpacity
                onPress={() => setSwitch(true)}
                style={
                  switchState
                    ? styles.activeButton
                    : {
                        ...styles.activeButton,
                        backgroundColor: 'transparent',
                      }
                }
              >
                <AppListText
                  text={'Profile'}
                  textColor={switchState ? COLORS.white : COLORS.grayShadow}
                  fontFamily={'Nunito-Medium'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSwitch(false)}
                style={
                  !switchState
                    ? styles.activeButton
                    : {
                        ...styles.activeButton,
                        backgroundColor: 'transparent',
                      }
                }
              >
                <AppListText
                  text={'Settings'}
                  textColor={switchState ? COLORS.grayShadow : COLORS.white}
                  fontFamily={'Nunito-Medium'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fouthCountainer}>
            <FlatList
              data={
                switchState
                  ? ProfileData.UserProfileTab
                  : ProfileData.ProfileSettingTab
              }
              contentContainerStyle={styles.transactionStyle}
              renderItem={({ item }) => (
                <TitleWithIcon
                  variant={true}
                  title={item.title}
                  icon={item.icon}
                  trailing
                />
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
    flex: 0.42,
    paddingHorizontal: 20,
  },

  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  innerSeconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  avaterStyle: {
    width: 109,
    height: 105,
  },

  middleTextStyle: {
    alignItems: 'center',
    gap: 3,
  },

  FlatContainer: {
    flex: 0.5,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingVertical: 30,
    shadowColor: '#000',
    gap: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 1.0,

    elevation: 0.8,
  },

  innerThirdContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.Secondary,
    borderRadius: 10,
  },

  fouthCountainer: { flex: 0.7 },

  transactionStyle: {
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },

  activeButton: {
    backgroundColor: COLORS.Primary,
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
