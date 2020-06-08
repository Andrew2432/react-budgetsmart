import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
  SET_HOME_STATE,
  FETCH_DATA_FROM_LOCAL_STORAGE,
  REMOVE_TOAST_MODE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      // If local storage has previously stored expenses, use it
      // Otherwise create a new one
      if (localStorage.getItem('expenses') !== null) {
        const list = JSON.parse(localStorage.getItem('expenses'));
        list.push(payload);
        localStorage.setItem('expenses', JSON.stringify(list));
        return { ...state, expenses: list };
      } else {
        const list = [payload];
        localStorage.setItem('expenses', JSON.stringify(list));
        return { ...state, expenses: list };
      }

    case EDIT_EXPENSE:
      // Fetch the required expense
      let findExpense = state.expenses.filter(
        (expense) => expense.id === payload
      );

      return {
        ...state,
        currentExpense: findExpense[0],
        mode: 'edit',
      };

    case UPDATE_EXPENSE:
      // Update the currentExpense and edit the expenses
      // Update local storage
      state.currentExpense.name = payload.name;
      state.currentExpense.cost = payload.cost;

      const updateList = JSON.parse(localStorage.getItem('expenses'));

      updateList.forEach((expense, index) => {
        if (expense.id === state.currentExpense.id)
          updateList.splice(index, 1, state.currentExpense);
      });

      localStorage.setItem('expenses', JSON.stringify(updateList));

      return {
        ...state,
        expenses: updateList,
        currentExpense: null,
        mode: 'add',
        toastMode: 'edit',
      };

    case DELETE_EXPENSE:
      // Delete expense based on ID and update local storage
      const list = JSON.parse(localStorage.getItem('expenses'));

      list.forEach((expense, index) => {
        if (expense.id === payload) list.splice(index, 1);
      });

      localStorage.setItem('expenses', JSON.stringify(list));

      return { ...state, expenses: list, toastMode: 'delete' };

    case COMPUTE_TOTAL_EXPENSE:
      // Calculate total expense of all items
      // Updated for each CRUD operation
      let total = 0;
      if (state.expenses.length > 0)
        total = state.expenses.reduce((acc, expense) => acc + expense.cost, 0);
      return { ...state, totalExpense: total };

    case CLEAR_ALL_EXPENSE:
      // Reset app state
      if (localStorage.getItem('expenses') !== null)
        localStorage.removeItem('expenses');
      return {
        expenses: [],
        totalExpense: 0,
        currentExpense: null,
        mode: 'add',
        toastMode: 'clear',
      };

    case SET_HOME_STATE:
      return { ...state, mode: 'add', currentExpense: null };

    case FETCH_DATA_FROM_LOCAL_STORAGE:
      // Put stored expenses into expense state if exists
      if (localStorage.getItem('expenses') !== null) {
        const list = JSON.parse(localStorage.getItem('expenses'));
        return {
          ...state,
          expenses: list,
        };
      } else {
        return { ...state, expenses: [] };
      }

    case REMOVE_TOAST_MODE:
      // Disable toasts
      return { ...state, toastMode: null };

    default:
      return state;
  }
};
