import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { getUserSuccess, UsersActions } from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { getUsers } from '../../services';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducers';

export const usersEpic = (actions$: ActionsObservable<AnyAction>) =>
    actions$.pipe(
        ofType(UsersActions.GET_USER_PENDING),
        switchMap(() => {
            return from(getUsers().then((res: AxiosResponse<IUser[]>) => res.data))
                .pipe(
                    map((users: IUser[]) => getUserSuccess(users))
                );
        })
    );
