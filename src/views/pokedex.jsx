import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Image, Text, FlatList, ImageBackground} from 'react-native';

import PokedexItem from '../components/pokedexItem';
import Loader from '../components/loader';

import {getPokemonsByPage} from '../services/pokemons';

import colorsTheme from '../styles/colors';

const Pokedex = () => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundPrimary
        },
        containerList: {
            flex: 1,
            width: '100%',
            alignItems: 'center'
        },
        list: {
            width: '95%',
            gap: 20
        }
    })


    const [pokemons, setPokemons] = useState([])
    const [pokemonsNextPage, setPokemonsNextPage] = useState(null)

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = ( url = 'https://pokeapi.co/api/v2/pokemon') => {
        getPokemonsByPage(url).then(res => {
            setPokemons(pokemons => [...pokemons, ...res.data.results])
            setPokemonsNextPage(res.data.next)
        }).catch(err => {
            console.log('Error getting pokemons', err)
        })
    }

    const renderItem = (pokemon, index) => {
        return (
            <PokedexItem
                id={index + 1}
                name={pokemon.name}
            />
        )
    }


    return (
            <View style={styles.container}>
                <View style={styles.containerList}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={pokemons}
                        renderItem={({item, index}) => renderItem(item, index)}
                        numColumns={3}
                        onTouchEnd={() => getPokemons(pokemonsNextPage)}
                        ListFooterComponent={() => <Loader/>}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </View>
    )
}

export default Pokedex
