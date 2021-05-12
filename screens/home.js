import React, {useState, useEffect} from 'react';
import {View, FlatList, Button, Alert} from 'react-native';
import RenderList from "./list";
import Fire from "../Fire";

const deleteAlert = (list) => {
    Alert.alert(
        'Delete List',
        'Are you sure?',
        [
            {text: 'Yes', onPress: () => firebase.deleteList(list)},
            {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
        ],
        {
            cancelable: true
        }
    );
};

export default function Home({navigation}) {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase = new Fire((error) => {
            if (error) {
                return alert("Une erreur est survenue");
            }
            firebase.getLists(lists => {
                setLists(lists);
                setLoading(false);
            });
            return function unsubscribe() {
                firebase.detach();
            };
        });
    }, []);


    return (
        <View style={{flex: 2, alignContent: 'center', margin: 50}}>
            <FlatList
                data={lists}
                renderItem={list => (
                    <View style={{backgroundColor: list.item.color, flex: 4}}>
                        <RenderList name={list.item.name} color={list.item.color} todos={list.item.todos}/>
                        <Button
                            title="Update"
                            onPress={() =>
                                navigation.navigate('Update', {list: list})
                            }
                        />
                        <Button
                            title='Delete'
                            onPress={() => deleteAlert(list.item)}
                            color="#E37399"
                        />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Button
                title="Ajouter"
                onPress={() =>
                    navigation.navigate('Add')
                }
            />
        </View>
    )

}
