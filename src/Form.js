import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from 'shared-code';

class Form extends Component {
    state = {
        place: ''
    };

    handleChange = text => {
        this.setState({place: text});
    };

    handlePress = () => {
        this.props.addPlace(this.state.place);
    };

    render() {
        return (
            <View>
                <TextInput onChangeText={this.handleChange}/>
                <Button onPress={this.handlePress} title="Submit" />
            </View>
        );
    }
}

export default connect(null, { addPlace })(Form);