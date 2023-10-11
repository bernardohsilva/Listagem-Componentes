import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TelaAgendamento } from '../screens/HomeForms';
import { TelaRegistro } from '../screens/HomeLista';


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TelaAgendamento"
                component={TelaAgendamento}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TelaRegistro"
                component={TelaRegistro}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
