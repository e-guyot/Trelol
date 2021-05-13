import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, FormControl, Input, InputLabel, TextInput } from 'react-native';
import Fire from '../Fire.js';

export default function updateList(props) {

  const [name, setName] = React.useState("");
const [color, setColor] = React.useState("");
const id = props.route.params.list.item.id;


  return (
  <View style={{marginTop: 50}}>
        <TextInput onChangeText={(name) => setName(name)} >
          {props.route.params.list.item.name}
        </TextInput>
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => firebase.updateList({ id: id, name: name, color: color, todos: []})}>
        <Text>Mettre à jour</Text>
      </TouchableOpacity>

  </View>
      )
      }