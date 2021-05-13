import {Text, View, FlatList, CheckBox} from 'react-native';
import * as React from 'react';

export default function RenderList(props) {
    return (
        <View style={{flex: 1, margin: 20}}>
            <View style={{backgroundColor: props.color}}>
                <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 36}}>{props.name}</Text>
                <FlatList
                    data={props.todos}
                    renderItem={todo => (
                        
                        <View>
                            <CheckBox
                                value={todo.item.completed}
                                disabled
                            />
                            <Text style={{marginLeft: 20, fontSize: 24}}> ► {todo.item.title}</Text>
                        </View>
                    )}
                    keyExtractor={todo => todo.title}
                />
            </View>
        </View>
    )

}
