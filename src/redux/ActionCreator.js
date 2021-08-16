import * as ActionTypes from './ActionTypes';
//import {BASE_URL, getCdOfferings, getCurrentUser} from '../Utils/APIUtils';


export const addHolder = (holder) => ({
    type:ActionTypes.ADD_HOLDER,
    payload: holder
});

