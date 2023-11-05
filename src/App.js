import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'grey','skyblue','orange','violet','brown'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;