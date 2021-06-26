import { combineReducers } from 'redux';
import { handleActions }  from 'redux-actions';
import { example } from '../actions';

const reducer = handleActions(
    {
        [example.toString()]: (
            state,
            { payload }
        ) => {
            return { ...state, example: state.example + payload.example };
        }
    },
    { example: 123 }
);
export default combineReducers({
    example: reducer
})
