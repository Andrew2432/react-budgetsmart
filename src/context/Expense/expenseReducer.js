import {
  ADD_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };

    case COMPUTE_TOTAL_EXPENSE:
      return { ...state, totalExpense: state.totalExpense + payload };

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
