import React from 'react';
import './App.css';
import { Bootstrap } from 'react-bootstrap';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransactions from './components/AddTransactions';
import Transactions from './components/Transactions';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="et-container">
        <Balance />
        <IncomeExpenses />
        
      </div>
      <Transactions />
      <AddTransactions />
    </div>
  );
}

export default App;
