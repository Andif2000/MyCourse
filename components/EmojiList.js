import { View, Text, FlatList, Platform, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const EmojiList = ({ onSelect, onCloseModal }) => {
    const [emoji] = useState([
        require('../assets/image/emo2.png'),
        require('../assets/image/emo1.png'),
        require('../assets/image/emo4.png'),
        require('../assets/image/emo3.png'),
        require('../assets/image/emo6.jpg'),
        require('../assets/image/emo5.jpg'),
    ])
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        onPress={() => {
                            onSelect(item)
                            onCloseModal()
                        }}>
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                )
            }}
        />
    )
}

export default EmojiList
const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});