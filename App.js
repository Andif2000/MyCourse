import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
const PlaceholderImg = require('./assets/image/background1.jpeg')
import * as ImagePicker from 'expo-image-picker'
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setshowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setshowAppOptions(true);
    } else {
      console.log('You did not selected image');
    }
  }

  const onReset = () => {
    setshowAppOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true)
  }
  const onSaveImageAsync = () => {
    setshowAppOptions(false);
  }
  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <GestureHandlerRootView  style={{ flex: 1, backgroundColor: '#25282e', alignItems: 'center' }}>
      <View style={{ flex: 1, paddingTop: 58 }}>
        <ImageViewer
          PlaceholderImgSource={PlaceholderImg}
          SelectedImage={selectedImage}
        />
        {pickedEmoji !== null ?
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
        {
          showAppOptions ?
            (<View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
              </View>
            </View>) : (
              <View>
                <Button theme={"primary"} label={'Chose a Picture'} onPress={pickImageAsync} />
                <Button label={'Use This Photo'} onPress={() => { setshowAppOptions(true) }} />
              </View>)
        }
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  optionsContainer: {
    bottom: 80,
    position: 'absolute',
    alignItems: 'center'
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})