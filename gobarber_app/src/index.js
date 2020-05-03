import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#8305f0" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
