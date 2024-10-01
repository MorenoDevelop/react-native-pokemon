import React, {useState, useEffect} from 'react'
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

import PokemonType from './pokemonType';

import {getPokemonById} from '../services/pokemons';

import colorsTheme from '../styles/colors';

const PokedexItem = ({id, name}) => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            width: '32%',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            backgroundColor: colors.backgroundSecondary,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
        },
        image: {
            width: 80,
            height: 80
        },
        number: {
            marginVertical: 5,
            color: colors.textSecondary
        },
        name: {
            color: colors.textPrimary,
            fontWeight: 'bold'
        },
        containerTypes: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            marginTop: 10
        }
    })


    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemonById(id).then(res => {
            console.log('this is a pokemon', res.data.types)
            setPokemon(res.data)
        }).catch(err => {
            console.log('Error getting pokemon', err)
        })
    }, []);

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
        >
            <Image
                style={styles.image}
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                resizeMethod={'contain'}
            />
            <Text style={styles.number}>#{id}</Text>
            <Text style={styles.name}>{name.toUpperCase()}</Text>

            <View style={styles.containerTypes}>
                {pokemon?.types.map(type => {
                    return (
                        <PokemonType
                            type={type.type.name}
                        />
                    )
                })
                }
            </View>
        </TouchableOpacity>
    )
}

export default PokedexItem

