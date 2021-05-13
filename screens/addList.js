import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import { CheckBox, Text, View, ActivityIndicator, TouchableOpacity, FormControl, Input, InputLabel, TextInput } from 'react-native';
import Fire from '../Fire.js';

export default function addList({navigation}) {

  const [name, setName] = React.useState("");
const [color, setColor] = React.useState("");
 var todos = [];
const [todo, addTodos] = React.useState("");

  return (
  <View style={{marginTop: 50}}>
      <TextInput onChangeText={(name) => setName(name)} placeholder="name" />
     {/*  <div>
        <CirclePicker color={ '#ecf1f5' }onChange={ (color) => setColor(color) }/>
      </div> */}
      <View>
        <Text>A faire</Text>
                            <CheckBox/>
                            <TextInput onChangeText={(todo) => addTodos(todos.push(todo))} >
                            </TextInput> 
                        </View>
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => firebase.addList({ name: name, color: color, todos: []})}>
        <Text>Ajouter</Text>
      </TouchableOpacity>

  </View>
      )
      }