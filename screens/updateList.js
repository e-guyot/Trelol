import React, { useState, useEffect } from 'react';
import { CheckBox, Text, View, FlatList, TouchableOpacity, FormControl, Input, InputLabel, TextInput } from 'react-native';
import Fire from '../Fire.js';

export default function updateList(props) {

  const [name, setName] = React.useState("");
const [color, setColor] = React.useState("");
const id = props.route.params.list.item.id;
const [completed, setSelection] = React.useState("");
// var todos = [];
// const [todo, addTodos] = todos.push(todo);


  return (
  <View style={{marginTop: 50}}>
        <TextInput onChangeText={(name) => setName(name)} >
          {props.route.params.list.item.name}
        </TextInput>
        {/* <FlatList
                    data={props.route.params.list.item.todos}
                    renderItem={todo => (
                        <View>
                            <CheckBox
                                value={todo.item.completed}
                                onValueChange={(completed) => setSelection(completed)}
                            />
                            <TextInput onChangeText={(todo) => addTodos(todo)} >
                                {todo.item.title}
                            </TextInput>
                        </View>
                    )}
                    keyExtractor={todo => todo.title}
                /> */}
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => firebase.updateList({ id: id, name: name, color: color, todos: []})}>
        <Text>Mettre à jour</Text>
      </TouchableOpacity>

  </View>
      )
      }