import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../actions/homeActions';

class Home extends Component {
    componentDidMount() {
        console.log('Entered Home [1]...', this.props);
        this.props.actions.requestHelloWorld();
    }

    render() {
        return (
            <div>
                <h1>This is the Home screen!</h1>
                <h4>Test: {this.props.test}</h4>
                <h4>Message: {this.props.message}</h4>
            </div>
        )
    }
}

export const mapStateToProps = ({ home }) => ({
    test: home.test,
    message: home.message,
});

export function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ ...homeActions }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
