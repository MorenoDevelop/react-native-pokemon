import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

import colorsTheme from '../styles/colors';

const ButtonHome = ({name, color, press}) => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '48%',
            height: 70,
            borderRadius: 15,
            backgroundColor: color,
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
        },
        text: {
            color: colors.textPrimary,
            fontSize: 18,
            fontWeight: 'bold'
        }
    })

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={press}
        >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ButtonHome
