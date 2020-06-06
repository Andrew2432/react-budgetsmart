import {
  ADD_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, payload],
        totalExpense: state.totalExpense + payload.cost,
      };

    case EDIT_EXPENSE:
      return { ...state, currentExpense: payload, mode: 'edit' };

    case UPDATE_EXPENSE:
      return { ...state, expenses: payload, mode: 'add', currentExpense: null };

    case COMPUTE_TOTAL_EXPENSE:
      return { ...state, totalExpense: payload };

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
