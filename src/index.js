import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ExpenseState from './context/Expense/ExpenseState';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseState>
      <App />
    </ExpenseState>
  </React.StrictMode>,
  document.getElementById('root')
);
