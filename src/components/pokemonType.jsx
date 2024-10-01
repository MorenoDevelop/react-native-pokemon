import React from 'react'
import {StyleSheet, View , Text} from 'react-native';

import colorsTheme from '../styles/colors';

const PokemonType = ({type}) => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 7,
            borderWidth: 1,
            borderColor: colors[type],
            borderRadius: 30,
        },
        text: {
            fontSize: 8.5,
            color: colors[type]
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{type.toUpperCase()}</Text>
        </View>
    )
}

export default PokemonType
