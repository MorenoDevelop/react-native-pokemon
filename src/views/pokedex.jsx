import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Image, Text, FlatList} from 'react-native';
import axios from 'axios';

import PokedexItem from '../components/pokedexItem';

import {getPokemonsByPage} from '../services/pokemons';

const Pokedex = () => {
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
            <FlatList
                data={pokemons}
                renderItem={({item, index}) => renderItem(item, index)}
                numColumns={3}
                onTouchEnd={() => getPokemons(pokemonsNextPage)}

                columnWrapperStyle={{justifyContent: 'space-between'}}
                contentInset={{ right: '5%', top: 0, left: '5%', bottom: 0 }}
            />
        </View>
    )
}

export default Pokedex

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        width: '95%'
    }
})
