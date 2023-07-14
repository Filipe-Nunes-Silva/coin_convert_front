import { useState } from 'react';
import * as C from './AppStyled';
import Converter from './components/Converter/Index';


function App() {

  return (
    <C.Container>

      <C.Header>
        <h1>COIN CONVERT</h1>
        <p>Veja o valor do seu dinheiro em diferentes moedas com facilidade. </p>
      </C.Header>

      <Converter />

    </C.Container>
  );
};

export default App;
