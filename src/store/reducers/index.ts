import { IUser, usersReducer } from './users.reducers';
import { combineReducers, Reducer } from 'redux';
import { searchReducer } from './search.reducers';

export interface IStore {
    search: string;
    users: IUser[];
}

export const rootReducers: Reducer<IStore> = combineReducers({
    search: searchReducer,
    users: usersReducer
});
