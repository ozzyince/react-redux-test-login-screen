import { Action } from 'redux';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
}

export interface ReducerLookUp<T> {
    [key: string]: (state: T, action) => T;
}

export function toPayload (action: ActionWithPayload<any>) {
    return action.payload;
}

export function lookUpMatcher<T>(
    lookUp: ReducerLookUp<T>,
    state: T,
    action: Action | ActionWithPayload<any>): T {
    return lookUp[action.type] ?
        lookUp[action.type](state, action) :
        state;
}