import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {

    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="game"
                component={Game}
            />
        </Navigator>
    );
}
