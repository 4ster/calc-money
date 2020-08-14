import React, { Component, useLayoutEffect } from 'react';
import Total from './components/total/Total';
import Operation from './components/operation/Operation';
import History from './components/history/History';

class App extends Component {
  
  state = {
    transactions: [],
    decription: '',
    amount:'',
    allPlus: 0,
    allMinus: 0,
    balance: 0
  }

  addTransaction = (add) => {

    const transactions = [...this.state.transactions];
    
    const transaction = {
      id: `cmr${(+new Date())}.toString(16)`,
      description: this.state.description,
      amount: +this.state.amount,
      add,
      }
    
    transactions.push(transaction);
    

    this.setState({ 
      transactions,
      description: '',
      amount: ''},() => {
        this.calcPlusMinus(true);
        this.calcPlusMinus(false);
    })
  }

  addAmount = (e) =>  {
    this.setState({amount: e.target.value})
  }

  addDescription = (e) => {
    this.setState({description: e.target.value})
  }

  getBalance = () => {
    const balance = this.state.allPlus - this.state.allMinus;
    this.setState({
      balance
    })
  }

  calcPlusMinus(add) {
    const transactions = [...this.state.transactions];
    
    const reducer = (accumulator, currentValue) => currentValue.add===add ? accumulator + currentValue.amount : accumulator
    const summ = transactions.reduce(reducer, 0)
    
    if (add){
      this.setState({allPlus: summ})
    }
    else{
      this.setState({allMinus: summ})
    }
  }
  
  render() {
    return (
      <>
        <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <Total
          balance={this.state.balance}
          allPlus={this.state.allPlus}
          allMinus={this.state.allMinus}
          />
          <Operation
          addTransaction={this.addTransaction}
          addAmount = {this.addAmount}
          addDescription={this.addDescription}
          description = {this.state.description}
          amount = {this.state.amount}/>
          <History
          transactions={this.state.transactions}/>


       </div>

      </main>
      </>
      
    );
  }
}

export default App;
