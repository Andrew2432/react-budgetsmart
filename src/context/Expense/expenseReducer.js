import { ADD_EXPENSE, COMPUTE_TOTAL_EXPENSE } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };

    case COMPUTE_TOTAL_EXPENSE:
      return { ...state, totalExpense: state.totalExpense + payload };
    default:
      return state;
  }
};
