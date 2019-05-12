import { combineEpics, Epic } from 'redux-observable';
import { usersEpic } from './users.epics';

export const rootEpics: Epic = combineEpics(usersEpic);
