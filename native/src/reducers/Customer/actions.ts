import { batch } from "react-redux";
import { Actions } from './state';
import { Customer } from "@models";

export const actionCreators = {
    add: (data: Customer) => async (dispatch, getState) => {
        await dispatch({
            type: Actions.AddItem,
            data: data
        });
    },
    remove: (id: number) => async (dispatch, getState) => {
        await dispatch({
            type: Actions.RemoveItem,
            id
        });
    },
    update: (data: Customer) => async (dispatch, getState) => {
        await dispatch({
            type: Actions.UpdateItem,
            data: data
        });
    }
}