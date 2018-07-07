import {createStore} from 'redux';
import {formReducer} from '../reducers/formReducer';

export const store = createStore(formReducer);