import axios from 'axios'

export const getPokemonsByPage = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getPokemonById = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
