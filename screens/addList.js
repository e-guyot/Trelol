import React from 'react';
import {CheckBox, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Todo from "./todo"

export default function addList({navigation}) {

    const [name, setName] = React.useState("");
    const [color, setColor] = React.useState("");
    const [todo, addTodos] = React.useState("");

    return (
        <View style={{marginTop: 50}}>
            <TextInput onChangeText={(name) => setName(name)} placeholder="name"
                       style={{padding: 20, marginHorizontal: 50, backgroundColor: '#DCDCDC'}}/>
            <TouchableOpacity style={{backgroundColor: 'orange', margin: 80, padding: 20, alignItems: 'center'}}
                              onPress={() => firebase.addList({name: name, color: color, todos: []})}>
                <Text>Ajouter</Text>
            </TouchableOpacity>
        </View>
    )
}
