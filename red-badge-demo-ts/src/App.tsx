import React from 'react';
import PropsExample from './components/PropsExample';
import PropsMapping from './components/PropsMapping';

function App() {
  const visitedPlaces = [
    'Uganda',
    'Costa Rica',
    'Guatemala',
    'Jamaica',
    'Mexico',
    'Bahamas',
  ];
  return (
    <div>
      <PropsExample name='Tom' business='MySpace' />
      <PropsMapping visited={visitedPlaces} />
    </div>
  );
}

export default App;
