import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/home";
import addListScreen from "./screens/addList";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Welcome'}}
            />
            <Stack.Screen
                name="Add"
                component={addListScreen}
                options={{title: 'Ajouter'}}
            />
        </Stack.Navigator>
    );
};

export default MyStack;
