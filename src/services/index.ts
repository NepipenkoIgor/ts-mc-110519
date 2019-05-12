import { AxiosPromise } from 'axios';
import { IUser } from '../store/reducers/users.reducers';
import { axiosInstance } from '../config';

export const getUsers: () => AxiosPromise<IUser[]> = () => axiosInstance.get<IUser[]>('/participants?key=o67hqh');
