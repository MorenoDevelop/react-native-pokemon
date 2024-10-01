import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../views/home';
import Pokedex from '../views/pokedex';

const Stack = createStackNavigator()

const Router = () => {

    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen
                name='home'
                component={Home}
                options={({}) => ({
                    headerShown: false,
                })}
            />

            <Stack.Screen
                name='pokedex'
                component={Pokedex}
                options={({}) => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default Router
