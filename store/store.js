import { createStore } from 'redux';
import comment from '../reducers/comments';

let store = createStore(comment, window.state);