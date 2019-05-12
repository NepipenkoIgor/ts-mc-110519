import { IUser } from '../reducers/users.reducers';

export enum UsersActions {
    GET_USER_PENDING = 'GET_USER_PENDING',
    GET_USER_SUCCESS= 'GET_USER_SUCCESS',
}

export function getUserPending() {
    return {
        type: UsersActions.GET_USER_PENDING,
    };
}

export function getUserSuccess(payload: IUser[]) {
    return {
        type: UsersActions.GET_USER_SUCCESS,
        payload
    };
}
