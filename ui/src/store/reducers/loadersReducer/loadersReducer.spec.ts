import reducer from './index'
import { updateLoader } from '../../actions'

describe('loadersReducer', () => {
    it(`should handle ${updateLoader}`, () => {
        const state = reducer({}, updateLoader({ name: 'test', value: true }));
        expect(state).toEqual({ test: true });

        const stateWithFalse = reducer(state, updateLoader({ name: 'test1', value: false }));
        expect(stateWithFalse).toEqual({ test: true, test1: false });
    });
});
