// Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});
//
// function deliveryMethod(): string {
//     return 'overnight';
// }
//
// function shipWeight(): number {
//     const el: HTMLElement | null = document.getElementById('weight');
//     if (!el) {
//         return 0;
//     }
//     return parseInt(el.innerHTML);
// }

/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr: string | string []): void {
    function sendEmail(addr: string): void {
        // tslint:disable-next-line
        console.log(`Shipping to ${addr} via ${'standard'} delivery`);
        //
        // if (shipWeight() > 100) {
        //     // tslint:disable-next-line
        //     console.log('WARNING: Oversize package');
        // }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

sendUpdates('igor@gmail.com');

let a: number = 1;

