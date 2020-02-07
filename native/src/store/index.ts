
import * as LocalStorage from './localStorage';
import { CustomerReducer, CustomerState } from '@reducers';
export { LocalStorage };
export interface ApplicationState {
    Customer: CustomerState;
}

export const reducers = {
    Customer: CustomerReducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): Promise<any>;
}

export interface AppThunkActionAsync<TAction, TResult> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): Promise<TResult>
}