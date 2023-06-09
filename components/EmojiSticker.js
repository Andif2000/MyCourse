import { View, Text, Image } from 'react-native'
import React from 'react'

const EmojiSticker = ({ imageSize, stickerSource }) => {
    return (
        <View style={{ top: -350 }}>
            <Image
                source={stickerSource}
                resizeMode='contain'
                style={{ width: imageSize, height: imageSize }} />
        </View>
    )
}

export default EmojiSticker