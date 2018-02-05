import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Link from './List';
import Count from './Count';
import SimpleInput from './../../Components/TextInput/TextInput';

class List extends Component {
    constructor (props) {
        super(props);
        const elements = [ 'Edward', 'Leonardo', 'Frederick' ];
        this.state = {elements, text: ''};
    }

    static navigationOptions = {
        title: 'Test',
    };

    _onChangeText = (text) => {
        this.setState({text});
    };

    _onSubmitEditing = () => {
        const {elements, text} = this.state;
        this.setState({elements: [ text, ...elements ], text: ''});
    };

    _onButtonPressed = (indexToDelete) => {
        const {elements} = this.state;
        const newElements = elements.filter((item, index) => index !== indexToDelete ? item : null);
        this.setState({elements: newElements});
    };

    _onElementPressed = (indexToNavigate) => {
        const {navigate} = this.props.navigation;
        const {elements} = this.state;
        navigate('Greeter', {name: elements[ indexToNavigate ]});
    };

    render () {
        const {elements = [], text = ''} = this.state;
        const count = elements.length || 0;

        return (
            <View style={ styles.container }>
                <View style={ styles.container }>
                    <SimpleInput text={ text }
                                 onChangeText={ this._onChangeText }
                                 onSubmitEditing={ this._onSubmitEditing }
                                 placeHolder={ `Type someone you'd like to greet` }/>
                    <Count count={ count }/>
                    <Link elements={ elements }
                          onButtonPressed={ this._onButtonPressed }
                          onElementPressed={ this._onElementPressed }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBarHeight: {
        height: 20,
    },
});

export default List;