import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/home";
import addListScreen from "./screens/addList";
import updateListScreen from "./screens/updateList";


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
            <Stack.Screen
                name="Update"
                component={updateListScreen}
                options={{title: 'Maj'}}
            />
        </Stack.Navigator>
    );
};

export default MyStack;
