import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
  SET_HOME_STATE,
  FETCH_DATA_FROM_LOCAL_STORAGE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  let foundIndex;

  switch (type) {
    case ADD_EXPENSE:
      if (localStorage.getItem('expenses') !== null) {
        const list = JSON.parse(localStorage.getItem('expenses'));
        console.log(list);
        list.push(payload);
        localStorage.setItem('expenses', JSON.stringify(list));
        return { ...state, expenses: list };
      } else {
        const list = [payload];
        console.log(list);
        localStorage.setItem('expenses', JSON.stringify(list));
        return { ...state, expenses: list };
      }

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
      foundIndex = null;
      state.currentExpense.name = payload.name;
      state.currentExpense.cost = payload.cost;

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

    case DELETE_EXPENSE:
      foundIndex = null;
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== payload
      );

      return { ...state, expenses: newExpenses };

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

    case SET_HOME_STATE:
      return { ...state, mode: 'add', currentExpense: null };

    case FETCH_DATA_FROM_LOCAL_STORAGE:
      if (localStorage.getItem('expenses') !== null) {
        return {
          ...state,
          expenses: JSON.parse(localStorage.getItem('expenses')),
        };
      } else {
        return { ...state, expenses: [] };
      }

    default:
      return state;
  }
};
