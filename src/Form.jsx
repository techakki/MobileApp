import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import

export default class Form extends Component {
    state = {
        place: ''
    };

    handleChange = event => {
        this.setState({place: event.target.value});
    };

    handlePress = () => {
        this
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.handleChange}/>
                <Button onPress={this.handlePress}>Submit</Button>
            </View>
        );
    }
}
