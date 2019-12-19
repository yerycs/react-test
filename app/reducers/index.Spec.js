import stockTicker from './index';
describe('ticker reducer', () => {
    it('adds ticker to the stockTicker state', () => {
        let expect = require('chai').expect;
        const data = {
            'ticker': 'test',
            'exchange': 'NASDAQ',
            'price': '193.33',
            'change': '203.13',
            'change_percent': '0.72',
            'last_trade_time': '2019-12-19T04:08:18.000Z',
            'dividend': '0.21',
            'yield': '0.34'
        };
        const action = {
            type: 'tickerFetchDataSuccess',
            payload: data,
        };
        const previousState = { data: [] };
        const expectedNewState = { data: [[], data] };
        const newState = stockTicker(previousState, action);
        expect(newState).eql(expectedNewState);
    });
});
