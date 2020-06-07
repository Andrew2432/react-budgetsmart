import {
  ADD_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
  EDIT_EXPENSE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  const { expenses } = state;

  switch (type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...expenses, payload] };

    case EDIT_EXPENSE:
      return { ...state, currentExpense: payload, mode: 'edit' };

    case COMPUTE_TOTAL_EXPENSE:
      let total = 0;
      if (expenses.length > 0)
        total = expenses.reduce((acc, expense) => acc + expense.cost, 0);
      return { ...state, totalExpense: total };

    case CLEAR_ALL_EXPENSE:
      return {
        expenses: [],
        totalExpense: 0,
        currentExpense: null,
        mode: 'add',
      };

    default:
      return state;
  }
};
