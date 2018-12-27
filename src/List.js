import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        return (
            <View>
                <Text>List of Places</Text>
                <FlatList
                    data={this.props.places}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        places: state
    };
}

export default connect(mapStateToProps, null)(List);
