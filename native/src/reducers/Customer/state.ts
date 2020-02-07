import { Customer } from '@models';

export enum Actions {
    AddItem = "ADD_CUSTOMER",
    RemoveItem = "REMOVE_CUSTOMER",
    UpdateItem = "UPDATE_CUSTOMER",
}

export interface CustomerState {
    items: Customer[];
}

export interface IAddAction {
    type: Actions.AddItem;
    data: Customer;
}
export interface IRemoveAction {
    type: Actions.RemoveItem;
    id: number;
}
export interface IUpdateAction {
    type: Actions.UpdateItem;
    data: Customer;
}