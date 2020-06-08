import { SET_TOAST, REMOVE_TOAST } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOAST:
      return { messages: [...state.messages, payload] };

    case REMOVE_TOAST:
      if (state.messages.pop() === undefined) return { messages: [] };
      else return { messages: state.messages.splice(-1, 1) };
    default:
      return state;
  }
};
