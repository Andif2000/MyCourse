import { View, Text, Pressable, StyleSheet, ImageComponent } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Button = ({ label, theme, onPress }) => {
    if (theme === "primary") {
        return (
            <View style={[styles.btnContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={onPress}>
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color={'#25292e'}
                        style={styles.buttonIcon} />
                    <Text style={[styles.btnLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.btnContainer}>
            <Pressable
                onPress={onPress}
                style={styles.button}>
                <Text style={styles.btnLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default Button
const styles = StyleSheet.create({
    btnContainer: {
        width: 320, height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginVertical: 20
    },
    buttonIcon: {
        paddingRight: 8
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnLabel: {
        color: '#fff',
        fontSize: 16
    }
})