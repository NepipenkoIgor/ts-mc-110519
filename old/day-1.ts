let isDone: boolean = true;

let str: string = 'Hi all';

let decimal: number = 6;
let hex: number = 0xf00d;
let binar: number = 0b1010;
let octal: number = 0o17;
let nan: number | null = NaN;

nan = null;

let bigNum: bigint = BigInt(100);
let bigNum1: bigint = 100n;

const key1: unique symbol = Symbol('Foo');
const key2: symbol = Symbol('Bar');


let strictObj = {
    [key1]: 100,
    [key2]: 'hi'
};

let a1 = strictObj[key1];

function onlyFoo(_value: typeof key1) {

}

let undef: undefined = null;
let nill: null = undefined;

onlyFoo(key2);

// import { IAnimation } from './interfaces';
//
//


new UIElement().animate({delay: 1000, easing: 'easy-out'});

//declare function $(selector: string): {on: Function};

$('body').on('click', () => {
    console.log('typescript');
});


let anyType: any;
anyType.a = 1;
anyType['a'] = 'ts';
anyType = 1;
anyType();

let anyType1: unknown;
anyType1.a = 1;
anyType1['a'] = 'ts';
anyType1 = 1;
anyType1();


let anyType2: object;
anyType2.a = 1;
anyType2['a'] = 'ts';
anyType2 = 1;
anyType2();

let anyType3: Object;
anyType3.a = 1;
anyType3['a'] = 'ts';
anyType3 = 1;
anyType3();


let a: Object = 1;
Object.create(a);

function setName(): void {

}

const user: {
    readonly firstName: string;
    readonly age?: number;
} = {
    firstName: 'Igor',
};
user.firstName = 'Vlad';

let name: (typeof user)['firstName'];

let keys: keyof (typeof user);  // firstName | age

keys = 'age';

let booleanMap: {
    [key: string]: boolean
} = {
    isDone: true,
}

let arr: readonly (number | string)[] = ['1', 2, 's', 'hi'];
arr[100] = 100;
arr.push(43);

let tuple: readonly [string, number] = ['data', 2];
tuple[0] = 'new string';

let y = [10, 'ts'] as const;
y[0] = 22;

let user = {firstName: 'Igor', age: 33}  as const;

user.firstName = 'Vlad';

let x = 10 as const;
x = 33;


type TInfo = {
    info: string;
};

interface IName {
    firstName: string;

}

interface IAge {
    age: number;
}

interface IAccount extends IName, IAge, TInfo {

}

class Person implements IAccount {
    public firstName!: string;
    public surname!: string;
    public age!: number;
    public info!: string;
}

interface IName {
    surname: string;
}


// generic => interface/ type/ function / class


type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
};
type NoReadOnly<T> = {
    -readonly [P in (keyof T)]: T[P]
};

type User = {
    bonuses: number[],
}

type CommonUser<Id = number, UserType = NoReadOnly<ReadOnly<User>>> = {
    _id: Id,
    info: UserType
}

let user: CommonUser<string> = {
    _id: 'asdasd#qwr4q2134',
    info: {
        bonuses: [1, 2, 3]
    }
}

user.info.bonuses = [1, 2, 3];


let admin: CommonUser<number, User> = {
    _id: 1,
    info: {
        bonuses: [1, 2, 3]
    }
}


interface IAccount<T extends { id: string, name: string }> {
    info: T;
}

let user1: IAccount<number>;


let arr: Array<number>


let a: Readonly
