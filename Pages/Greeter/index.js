import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeter extends Component {
    constructor (props) {
        super(props);

        const params = this.props.navigation.state.params;
        const name = params.name;

        this.state = {name};
    }

    static navigationOptions = {
        title: 'Hello',
    };

    render () {
        return (
            <View style={ {flex: 1} }>
                <Text> Hello {this.state.name}! </Text>
            </View>
        );
    }
}

export default Greeter;