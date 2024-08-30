import NetworkLoggerOverlay from '@components/NetworkLoggerOverlay';
import RootNavigator from '@router/RootNavigator';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <>
      <RootNavigator />
      <NetworkLoggerOverlay />
    </>
  );
}

export default App;
