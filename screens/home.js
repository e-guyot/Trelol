import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Fire from "../Fire";

export default function RenderList() {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase = new Fire((error) => {
            if(error) {
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
        <View style={{ marginTop: 50}}>
            <FlatList
                data={lists}
                renderItem={ list => (
                    <View style={{backgroundColor:list.item.color, flex: 1}}>
                        <Text>{list.item.name}</Text>
                    </View>)
                }
                keyExtractor={item => item.id}
            />
        </View>
    )

}
