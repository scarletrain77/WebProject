/*class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}*/
function pyramid(a) {
    for (var i = 1; i <= a; i++) {
        var b = '';
        for (var j = 0; j <= a - i - 1; j++) {
            b += ' ';
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
            b += '*';
        }
        console.log(b);
    }
}
//var numS:string = prompt("请输入一个数字","");
//var num:number = +numS;
//var num:number = parseInt(numS);
window.onload = function () {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
    //var numS:string = process.argv[2];
    //pyramid(parseInt(numS));
    pyramid(5);
};
//# sourceMappingURL=main.js.map