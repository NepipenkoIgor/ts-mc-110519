import { HashMap, IUser, userHashMap } from '../src';

const users: IUser[] = [
    {
        _id: 'ae123124',
        firstName: 'Igor',
        age: 33
    },
    {
        _id: 'a124',
        firstName: 'Denis',
        age: 32
    },
    {
        _id: '3124',
        firstName: 'Marina',
        age: 18
    }, {
        _id: '24',
        firstName: 'Vlad',
        age: 21
    }
]

const expectedRes: HashMap<IUser> = {
    ae123124: {
        _id: 'ae123124',
        firstName: 'Igor',
        age: 33
    },
    a124: {
        _id: 'a124',
        firstName: 'Denis',
        age: 32
    },
    3124: {
        _id: '3124',
        firstName: 'Marina',
        age: 18
    },
    24: {
        _id: '24',
        firstName: 'Vlad',
        age: 21
    },
}

describe('Test hashMap function ', () => {
    it('should make hashMap', () => {
        expect(userHashMap(users)).toEqual(expectedRes);
    });
});


