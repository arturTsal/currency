import {createStore} from 'react-redux';
import {formReducer} from '../reducers/formReducer';

export const store = createStore(formReducer);