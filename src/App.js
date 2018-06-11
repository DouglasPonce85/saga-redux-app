import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';
import { history } from './store';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
};

export default App;

