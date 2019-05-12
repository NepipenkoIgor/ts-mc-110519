// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, 2, '2');
// let avg: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const aver: number = (a + b + c) / 3;
//     return `Average is ${aver}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '2');
// let avg: number = average(1, 2, 3);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const aver: number = (a + b + c) / 3;
//     return `Average is ${aver}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '2');
// let avg: number = average(1, 2, 3);
// type sn = number | string;
//
// function isString(a: sn): a is string {
//     return typeof a === 'string';
// }
//
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const a of args) {
//         if (isString(a)) {
//             total += Number(a);
//             continue;
//         }
//         total += a;
//     }
//     return `Average is ${total / args.length}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 3, 4, 5, 5, 6);
// average(1, 2, '2');
// let avg: number = average(1, 2, 3);

// type sn = number | string;
//
// function isString(a: sn): a is string {
//     return typeof a === 'string';
// }
//
//
// function average(a: number, b: string): string;
// function average(a: string, b: string, c: string): string;
// function average(a: string, b: number): string;
// function average(...args: sn[]): string  {
//     let total: number = 0;
//     for (const a of args) {
//         if (isString(a)) {
//             total += Number(a);
//             continue;
//         }
//         total += a;
//     }
//     return `Average is ${total / args.length}`;
// }
//
// average(1, 's');
// average('1', 's', '1');
// average('1', 1);
//
//
// average(1);
// average(1, 2);
// average(1, 2, 3, 4, 5, 5, 6);
// average(1, 2, '2');
// let avg: number = average(1, 2, 3);
// let a: Array

// interface IUser {
//     _id: string;
//     firstName: string;
//     age: number;
// }
//
// type HashMap<T> = {
//     [key: string]: T;
// };
//
// const users: IUser[] = [
//     {
//         _id: 'ae123124',
//         firstName: 'Igor',
//         age: 33
//     },
//     {
//         _id: 'a124',
//         firstName: 'Denis',
//         age: 32
//     },
//     {
//         _id: '3124',
//         firstName: 'Marina',
//         age: 18
//     }, {
//         _id: '24',
//         firstName: 'Vlad',
//         age: 21
//     }
// ]
//
// const userHashMap: HashMap<IUser> = users.reduce<HashMap<IUser>>((hashMap: HashMap<IUser>, user: IUser) => {
//     hashMap[user._id] = user;
//     return hashMap;
// }, {});


// function fn(this: void): void {
//    this.a
// }
//
// fn();

// type Cb = (this: UIElement, e: Event) => void;
//
// class UIElement {
//     public addClickListener(_onclick: Cb): void {
//
//     }
// }
//
//
// class Handler {
//     public info!: string;
//
//     public onClick(this: Handler, _e: Event) {
//         this.info = (_e.target as HTMLElement).toString();
//     }
// }

//
// let h: Handler = new Handler();
// let uiElement: UIElement = new UIElement();
// uiElement.addClickListener(h.onClick)


// interface IA1 {
//     a: number;
// }
//
// interface IB1 {
//     b: number;
// }
//
// function fn(x: IA1 | IB1): number {
//     if ('a' in x) {
//         return x.a;
//     }
//     return x.b;
// }

interface IX {
    x: number;
}

interface IOnInit {
    onInit(): void;
}

class BasePoint implements IX, IOnInit {
    public constructor(
        public readonly x: number,
        protected readonly y: number,
        private readonly z: number
    ) {
    }

    public onInit(): void {
        this.x = 3;
    }
}

const p: BasePoint = new BasePoint(1, 2, 3);

class MyPoint extends BasePoint {
    public constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    public onInit(): void {
        this.x = 2;
        this.y = 2;
        super.onInit();
    }
}

const myPoint: BasePoint = new BasePoint(1, 2, 3);


class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

}

let ins1 = Singleton.getInstance();
let ins2 = Singleton.getInstance();
let ins3 = Singleton.getInstance();


type ThisIsClass = new (...args: any[]) => {};

function Timestamped<T extends ThisIsClass>(Base: T) {
    return class extends Base {
        public timestamp: Date = new Date();
    };
}

function Tagged<BC extends ThisIsClass>(Base: BC) {
    return class extends Base {
        public tagged: string = 'some tag';
    };
}


class SpecialPoint extends Tagged(Timestamped(MyPoint)) {
}

const specialPoint = new SpecialPoint(1, 2, 3);


function MyFunction() {

}

let a = new MyFunction()

// TODO !!!!!!!!!!
interface A {
    a: number;
}

interface B {
    b: string;
}

class A {
    public a!: number;
}

class B implements B {
    public b!: number;
}

abstract class AbstractInput {

    public element!: HTMLElement;

    public onFocus(): void {
        this.element.style.border = '1px solid blue';
    }

    public onBlur(): void {
        this.element.style.border = 'none';
    }

    public abstract  onInput(): void;
}

class UIKitInput extends AbstractInput{
    public   onInput(): void {

    }
}

class UIKitInputSelect extends AbstractInput{
    public   onInput(): void {

    }
}
class UIKitInputCheckBox extends AbstractInput{
    public   onInput(): void {

    }
}

function debounce(ms: number) {
    let timeout: number | null;
    return function (_target: Object, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                timeout ? clearTimeout(timeout) : null;
                timeout = setTimeout(() => {
                    timeout = null;
                    originalValue(...args);
                }, ms);
            }
        };
    };
}


class Lib {
    @debounce(5000)
    public getCount(): void {
        console.log('hi typescript')
    }

    @debounce(5000)
    public sum(a: number, b: number) {
        console.log(a+ b);
    }
}

let m = new Lib();
m.getCount();
m.getCount();
m.getCount();
m.getCount();
m.getCount();

m.sum(1, 2);
m.sum(11, 2);
setTimeout(()=> m.sum(1, 20), 7000);
m.sum(33, 2);
m.sum(1, 45);

// function logProperty(target: Object, key: string): void {
//     console.log(Reflect.getMetadata('design:type', target, key));
//     console.log(Reflect.getMetadata('design:typeinfo', target, key));
//     console.log(Reflect.getMetadata('design:returntype', target, key));
//     console.log(Reflect.getMetadata('design:paramtypes', target, key));
// }

function logMethod(target: Object, key: string, _descriptor: PropertyDescriptor): void {
    console.log(Reflect.getMetadata('design:type', target, key));
    console.log(Reflect.getMetadata('design:typeinfo', target, key));
    console.log(Reflect.getMetadata('design:returntype', target, key));
    console.log(Reflect.getMetadata('design:paramtypes', target, key));
}


class Point {

    public x: number = 1;

    @logMethod
    public getMultiX(num: number): number {
        return this.x * num;
    }
}

new Point();


import 'reflect-metadata';


const RANGE_KEY: string = 'RANGE_KEY';

function RangeValidation(
    min: number = 1,
    max: number = 10,
) {
    return (
        target: Object,
        key: string,
        paramIndex: number
    ) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[paramIndex] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

function ValidateRange(
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
) {
    const originalValue = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
        const monitoringRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};

        for (const k in Object.keys(monitoringRange)) {
            const range = monitoringRange[k];
            const realParamValue = args[k] as number;
            if (realParamValue < range[0] || realParamValue > range[1]) {
                throw new Error(`Param of ${key} on position ${k} outside interval [ ${range[0]}, ${range[1]} ] `);
            }
        }
        return originalValue(...args);
    }
}


class MathLib {
    @ValidateRange
    public updatePercentage(
        @RangeValidation(0, 100) newValue: number,
        @RangeValidation(25, 50) oldValue: number
    ) {
        console.log(newValue, oldValue);
    }
}

const lib = new MathLib();
console.log(Reflect.hasMetadata(RANGE_KEY, lib, 'updatePercentage'))
lib.updatePercentage(50, 25);
lib.updatePercentage(50, 100);
