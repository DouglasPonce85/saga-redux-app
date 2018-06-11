import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as registerActions from '../actions/homeActions';

class Register extends React.Component {

    render() {
        return (
            <div>
                <h1>REGISTER</h1>
            </div>
        )
    }
}

export const mapStateToProps = (register) => ({
    message: register.message
});

export function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ ...registerActions }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
