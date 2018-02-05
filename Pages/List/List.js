import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native';

const removeButton = (index, onButtonPressed) => (
    <Button title='delete' color='#cc3300' style={ {flex: 0} } onPress={ () => {
        onButtonPressed(index);
    } }/>);

const goButton = (index, onButtonPressed) => (
    <Button title='greet' color='#6666FF' style={ {flex: 0, marginHorizontal: 10} } onPress={ () => {
        onButtonPressed(index);
    } }/>);

const renderItem = (item, index, onButtonPressed, onElementPressed) => {
    return (
        <View style={ {flex: 1, flexDirection: 'row'} }>
            <Text style={ {flex: 0, alignSelf: 'center'} }>{ item }</Text>
            { removeButton(index, onButtonPressed) }
            <View style={{paddingHorizontal:10}}>{ goButton(index, onElementPressed) }</View>
        </View>
    );
};

export default Link = ({count, elements, onButtonPressed, onElementPressed}) => {
    return (
        <FlatList
            data={ elements }
            renderItem={ ({item, index}) => renderItem(item, index, onButtonPressed, onElementPressed) }
            keyExtractor={ (item, index) => index }/>
    );
};