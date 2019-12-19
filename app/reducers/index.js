const stockTicker = (state = {data: []}, action) => {
    switch (action.type) {
        case 'tickerFetchDataSuccess': {
            return {...state, data: [state.data, action.payload]};
        }
        default:
            return state;
    }
};

export default stockTicker;
