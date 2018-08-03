import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const sessionReducer = (state = {}, action) = 
