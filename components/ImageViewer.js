import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageViewer = ({ PlaceholderImgSource, SelectedImage }) => {
    const imageSource = SelectedImage !== null ? { uri: SelectedImage } : PlaceholderImgSource
    return (
        <Image source={imageSource} style={{ width: 320, height: 440, borderRadius: 18, }} />
    )
}

export default ImageViewer