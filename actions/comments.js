

import { ADD_COMMENT, REMOVE_COMMENT } from '../constants';


export function addComment(name, text) {
  return {
    type: ADD_COMMENT,
    name,
    text
  }
}