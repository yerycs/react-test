// eslint-disable-next-line no-unused-vars
import { tickerFetchDataSuccess } from './fetchActions';

describe("fetch data actions", () => {
    it("fetch data success", () => {
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
        const action = tickerFetchDataSuccess(data);
        expect(action).eql({
            payload: data,
            type: 'tickerFetchDataSuccess'
        });
    });
});
