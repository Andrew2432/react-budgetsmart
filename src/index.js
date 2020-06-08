import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ExpenseState from './context/Expense/ExpenseState';
import ToastState from './context/Toasts/ToastState';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseState>
      <ToastState>
        <App />
      </ToastState>
    </ExpenseState>
  </React.StrictMode>,
  document.getElementById('root')
);
