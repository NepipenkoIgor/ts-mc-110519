import { AnyAction } from 'redux';
import { UsersActions } from '../actions/user.actions';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}

const initialState: IUser[] = [];

export function usersReducer(state: IUser[]  = initialState, action: AnyAction): IUser[]  {
    switch (action.type) {
        case UsersActions.GET_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
