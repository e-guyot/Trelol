import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FormControl, Input, InputLabel, TextInput } from 'react-native';
import Fire from '../Fire.js';

export default function addList({navigation}) {

  const [name, setName] = React.useState("");
const [color, setColor] = React.useState("");


  return (
  <View style={{marginTop: 50}}>
      <TextInput onChangeText={(name) => setName(name)} placeholder="name" />
      <CirclePicker color={ 'green' } onChange={ (color) => setColor(color) }/>
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => firebase.addList({ name: name, color: color, todos: []})}>
        <Text>Ajouter</Text>
      </TouchableOpacity>

  </View>
      )
      }