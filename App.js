import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
const PlaceholderImg = require('./assets/image/background1.jpeg')
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      console.log('You did not selected image');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#25282e', alignItems: 'center' }}>
      <View style={{ flex: 1, paddingTop: 58 }}>
        <ImageViewer
          PlaceholderImgSource={PlaceholderImg}
          SelectedImage={selectedImage}
        />
        <Button theme={"primary"} label={'Chose a Picture'} onPress={pickImageAsync} />
        <Button label={'Use This Photo'} />
      </View>
    </SafeAreaView>
  );
}
