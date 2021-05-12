import React, { useState, useEffect } from 'react';
import { ColorPicker } from 'react-native-color-picker'
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FormControl, Input, InputLabel, TextInput } from 'react-native';
import Fire from '../Fire.js';

export default function addList({navigation}) {

  const [name, setName] = React.useState("");
const [color, setColor] = React.useState("");

  return (
  <View style={{marginTop: 50}}>
      <TextInput onChangeText={(name) => setName(name)} placeholder="name" />
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => firebase.addList({ name: name, color: color, todos: []})}>
        <Text>Ajouter</Text>
      </TouchableOpacity>

  </View>
      )
      }