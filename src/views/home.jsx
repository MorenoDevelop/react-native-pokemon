import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

import ButtonHome from '../components/buttonHome';

import colorsTheme from '../styles/colors';

const Home = ({navigation}) => {
    const colors = colorsTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary
        },
        title: {
            width: '90%',
            marginVertical: 20,
            fontSize: 25,
            fontWeight: 'bold',
            color: colors.textPrimary
        },
        containerButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '5%',
            width: '90%'
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What do you want to know about pokemon</Text>

            <View style={styles.containerButtons}>
                <ButtonHome
                    name={'Pokedex'}
                    color={'#eb3637'}
                    press={() => navigation.navigate('pokedex')}
                />
                <ButtonHome
                    name={'Moves'}
                    color={'#f29d2b'}
                />
            </View>
        </View>
    )
}

export default Home
