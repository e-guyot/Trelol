import {Text, View, FlatList, Button} from 'react-native';
import * as React from 'react';

export default function Update(props) {
    console.log(props.todos);
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{backgroundColor: props.color}}>
                <Text>{props.name}</Text>
                <FlatList
                    data={props.todos}
                    renderItem={todo => (
                        <View>
                            <Text>{todo.item.title}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )

}
