import { Action } from 'redux';
import { Actions, CustomerState, IAddAction, IRemoveAction, IUpdateAction } from './state';
import { FileService } from '@services';

const unloadedState: CustomerState = {
    items: []
};

export type KnownAction = IAddAction | IRemoveAction | IUpdateAction;

export const reducer = (currentState: CustomerState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case Actions.AddItem:
            currentState.items.push(action.data);
            return { ...currentState };
        case Actions.RemoveItem:
            const index = currentState.items.findIndex(i => i.Id == action.id);
            if (index > -1)
                currentState.items.splice(index, 1);
            return { ...currentState };
        case Actions.UpdateItem:
            let item = currentState.items.find(i => i.Id == action.data.Id);
            if (item)
                item = action.data;
            return { ...currentState };
        default:
            break;
    }
    return currentState || unloadedState;
};
