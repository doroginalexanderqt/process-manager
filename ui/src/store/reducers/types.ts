import { ActionFunctionAny } from 'redux-actions';

export type Action = ActionFunctionAny<any> & { toString: () => string }
