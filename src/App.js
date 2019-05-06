import React, { Component } from 'react';
import CurrencyConverter from './Components/CurrencyConverter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Render Props</h2>
        <CurrencyConverter render={() => {}} 
        render={(currencyData, amount) => (
          <p>
            US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
            {currencyData.symbol}
            {(amount * currencyData.rate).toFixed(2)}
          </p>
        )}/>
      </div>
    );
  }
}

export default App;
