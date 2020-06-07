import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };

    case EDIT_EXPENSE:
      let findExpense = state.expenses.filter(
        (expense) => expense.id === payload
      );

      return {
        ...state,
        currentExpense: findExpense[0],
        mode: 'edit',
      };

    case UPDATE_EXPENSE:
      state.currentExpense.name = payload.name;
      state.currentExpense.cost = payload.cost;

      let foundIndex;
      state.expenses.forEach((expense, index) => {
        if (expense.id === state.currentExpense.id) foundIndex = index;
      });

      state.expenses.splice(foundIndex, 1, state.currentExpense);

      return {
        ...state,
        expenses: state.expenses,
        currentExpense: null,
        mode: 'add',
      };

    case COMPUTE_TOTAL_EXPENSE:
      let total = 0;
      if (state.expenses.length > 0)
        total = state.expenses.reduce((acc, expense) => acc + expense.cost, 0);
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
