import { useColorScheme } from "react-native";
const colorsTheme = () => {
    const theme = useColorScheme()
    switch(theme) {
        case 'dark':
            return colors = {
                backgroundPrimary: '#141414',
                backgroundSecondary: '#242424',
                textPrimary: '#FCFCFC',
                textSecondary: '#BDBDBD',
                warning: '#FF0000',
                bug: '#94bc4a',
                dark: '#736c75',
                dragon: '#6a7baf',
                electric: '#e5c531',
                fairy: '#e397d1',
                fighting: '#cb5f48',
                fire: '#ea7a3c',
                flying: '#7da6de',
                ghost: '#846ab6',
                grass: '#71c558',
                ground: '#cc9f4f',
                ice: '#70cbd4',
                normal: '#aab09f',
                poison: '#b468b7',
                psychic: 'e5709b',
                rock: '#b2a061',
                steel: '#89a1b0',
                water: '#539ae2'
            }
            break;
        case 'light': //At the moment the colors are the same, but it is prepared for if the light mode is added.
            return colors = {
                backgroundPrimary: '#141414',
                backgroundSecondary: '#242424',
                textPrimary: '#FCFCFC',
                textSecondary: '#BDBDBD',
                warning: '#FF0000',
                bug: '#94bc4a',
                dark: '#736c75',
                dragon: '#6a7baf',
                electric: '#e5c531',
                fairy: '#e397d1',
                fighting: '#cb5f48',
                fire: '#ea7a3c',
                flying: '#7da6de',
                ghost: '#846ab6',
                grass: '#71c558',
                ground: '#cc9f4f',
                ice: '#70cbd4',
                normal: '#aab09f',
                poison: '#b468b7',
                psychic: 'e5709b',
                rock: '#b2a061',
                steel: '#89a1b0',
                water: '#539ae2'
            }
            break
    }


}

export default colorsTheme;
