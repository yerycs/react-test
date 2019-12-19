import io from 'socket.io-client';

let socket = null;

export const tickerFetchDataSuccess = data => {
    return {
        type: 'tickerFetchDataSuccess',
        payload: data
    };
};

export function tickerFetchData(ticker) {
    return (dispatch) => {
        socket = io('http://localhost:4000');

        socket.on('connect', () => {
            socket.on(ticker, (data) => {
                dispatch(tickerFetchDataSuccess(data));
            });

            socket.emit('ticker', ticker);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    };
}
