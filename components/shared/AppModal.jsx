import { Modal, StyleSheet, Text, View, Image } from 'react-native';
import AppButton from './AppButton';
import IMAGES from '../../constants/images';
import { COLORS } from '../../constants/color';

const AppModal = ({ modalVisible, setModalVisible, callback, title, description, buttonTitle }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={IMAGES.successfullyImage} style={styles.icon} />
            <Text style={styles.title}>
              {title}
              {'\n'}
              <Text style={{ fontSize: 14, fontFamily: 'Nunito-Medium', textAlign: 'center', color: COLORS.grayShadow }}>
                {description}
              </Text>
            </Text>

            <AppButton
              title={buttonTitle}
              onPress={() => {
                setModalVisible(!modalVisible);
                callback();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 10,
    width: '80%',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  icon: {
    width: '98%',
    height: 160,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AppModal;
