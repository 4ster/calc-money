import React from 'react';
import Total from './components/total/Total';
import Operation from './components/operation/Operation';
import History from './components/history/History';

function App() {
  return (
      <>
        <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <Total/>
          <Operation/>
          <History/>


       </div>

      </main>
      </>
      
  );
}

export default App;
