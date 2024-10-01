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
