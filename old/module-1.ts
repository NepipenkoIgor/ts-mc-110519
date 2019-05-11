/// <reference lib="es2018" />

// let a: number = 1;
// const b: number = 1;
//
//
// let firstName: string = 'Igor';
//
// let account = {
//     firstName,
//     getName(): string {
//         return this.firstName;
//     }
// }

//
// let person = {...account, age: 33};
// let dates = [...[11, 12]];
//
// let {firstName: myName} = person;
// let [firtsDate] = dates;
//
//
// let sum = (c: number, d: number) => c + d;
//
// class Point {
//     public x: number = 1;
// }
//
// for (const dd of dates) {
//     console.log(dd);
// }

// function userMessage([start, end]: TemplateStringsArray, {firstName: myName}: typeof account): string {
//     return `${start}${myName}${end}`;
// }
//
// console.log(userMessage`Good day , ${person} !!`);

function sleep(ms: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(500);
        yield item;
    }
}

export async function speakLikeSloth1(items: string []) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}


