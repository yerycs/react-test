import React from 'react';
import { shallow } from 'enzyme';
import '../jest.setup'; // Setup Enzyme & Adapter

import App from './App';

// Create the mock store
import configureMockStore from 'redux-mock-store';
import {tickerFetchData} from '../actions/fetchActions';
const mockStore = configureMockStore();

describe('App', () => {
    let wrapper, store;
    let expect = require('chai').expect;

    beforeEach(() => {
        const initialState = {
            data: []
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <App store={store} />
        );
    });

    it('should show previously data value', () => {
        // test that the state values were correctly passed as props
        expect(wrapper.props().data).to.eql([]);
    });
});

describe('App action', () => {
    // eslint-disable-next-line prefer-const
    let expect = require('chai').expect;
    it('should fetch data init', () => {
        expect(tickerFetchData().toString()).  eql(tickerFetchData().toString());
    });
});
