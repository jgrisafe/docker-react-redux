
import { ADD_COMMENT, REMOVE_COMMENT } from '../constants';

const initialState = {
  comments: []
}

function comment(state = initialState, action) {

  const newComments = [
    ...state.comments,
    { name: action.name, comment: action.text }
  ];

  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: newComments
      });
    default:
      return state;
  }
}