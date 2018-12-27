import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from 'shared-code';
import App from './App';

const store = createStore(reducer);

export default class Container extends Component {
    render(): React.ReactNode {
        return (
            <Provider store={store} children={<App />} />
        );
    }
};
