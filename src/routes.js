import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router';

import Home from './components/Home';
import Register from './components/Register';

const Container = styled.div`
  height: 100%;
`;

const routes = (
    <Container>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Redirect from="/" to="home" />
        </Switch>
    </Container>
);

export default routes;