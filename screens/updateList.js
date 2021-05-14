import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function updateList(props) {

    const [name, setName] = React.useState("");
    const [color, setColor] = React.useState("");
    const id = props.route.params.list.item.id;


    return (
        <View style={{marginTop: 50}}>
            <TextInput onChangeText={(name) => setName(name)}
                       style={{padding: 20, marginHorizontal: 50, backgroundColor: '#DCDCDC'}}
                       placeholder="name">
                {props.route.params.list.item.name}
            </TextInput>
            <TextInput onChangeText={(color) => setColor(color)}
                       style={{padding: 20, marginHorizontal: 50, backgroundColor: '#DCDCDC'}}
                       placeholder="color">
                {props.route.params.list.item.color}
            </TextInput>
            <TouchableOpacity style={{backgroundColor: 'orange', margin: 80, padding: 20, alignItems: 'center'}}
                              onPress={() => firebase.updateList({id: id, name: name, color: color, todos: []})}>
                <Text>Mettre à jour</Text>
            </TouchableOpacity>

        </View>
    )
}
