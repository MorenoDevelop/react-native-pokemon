import React, {useState, useEffect} from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import colorsTheme from '../styles/colors';

const Loader = () => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
    })

    const arrayColors = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
    const [loaderColor, setLoaderColor] = useState(colors['dragon'])

    //Randomly draws the color of the loader each time it is displayed
    useEffect(() => {
        setLoaderColor(colors[arrayColors[Math.floor(Math.random()*arrayColors.length)]])
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={loaderColor}
            />
        </View>
    )

}

export default Loader
