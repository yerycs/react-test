import {connect} from 'react-redux';
// eslint-disable-next-line camelcase
import { tickerFetchData } from '../actions/fetchActions';
import React, {PureComponent} from 'react';

// The below line is here as an example of getting prices
connect('AAPL');

class App extends PureComponent {
    constructor(props) {
        super(props);
        window.addEventListener('hashchange', () => {
            const ticker = location.hash.substr(1);
            this.props.fetchData(ticker);
        });
    }

    componentDidMount() {
        const ticker = location.hash.substr(1);
        this.props.fetchData(ticker);
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const {data} = this.props;
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                {data.map((item, i) => (
                    <pre key={i}>
                        {item}
                    </pre>
                ))}
            </div>
        );
    }
}

const mayDispatchToProps = (dispatch) => {
    return {
        fetchData: (ticker) => dispatch(tickerFetchData(ticker))
    };
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};
export default connect(mapStateToProps, mayDispatchToProps)(App);
