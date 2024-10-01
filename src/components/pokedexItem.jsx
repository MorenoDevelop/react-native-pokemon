import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native';

const PokedexItem = ({id, name}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}}
                   resizeMethod={'contain'}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default PokedexItem

const styles = StyleSheet.create({
    container: {
        width: '29%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5
    },
    image: {
        width: 90,
        height: 90
    },
    name: {
        color: '#000000'
    }
})
