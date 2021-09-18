/*console.log("hello world");
console.error("ошибка");
console.group("firstGroup");
console.groupCollapsed("group");
console.groupEnd();*/

// i = 5;
// console.log("i = ", i);
// console.log(window.i);
// function qqq()
// {
//     var i = 7;
//     console.log("i = ", i);
// }
// qqq();
// console.log(window.i);
// if (i > 5) 
// {
//     console.log("i > 5");
// } else 
// {
//     console.log("i <= 5");
// }

i = 1;
var j = 2;
let k = 3;
// const c = 7;
// c = 28;
// function qqq()
// {
//     i = 10;
//     j = 20;
//     console.log(i, j);
//     var i, j;
// }
// qqq();
// {
//     let k = 5;
//     console.log("k = ", k);
//     var j = 7;
//     console.log("j =", j);
// }
// console.log("k = ", k);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// var i = new Number(5);
// console.log(i.toExponential());
// console.log(i + 10);
// console.log(i.toString() + 10);
// i.toString = function()
// {
//     return "qqq";
// }
// console.log(i.toString() + 10);

// var s = new String("hello world");
// console.log(s.length);

// var b = new Boolean(true);

// var date = new Date();
// console.log(date.getTime());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getYear());

// var a = new Array(10);
// console.log(a[0]);

// a.length = 100
// console.log(a);

// var a = new Array([1]);
// console.log(a[0]);

// var o = new Object();
// o.qqq = 10;
// console.log(o.qqq);

// var b = new Object();
// b.__proto__ = o;
// console.log(b.qqq);
// b.qqq = 27;
// console.log(b.qqq);
// console.log(b.__proto__.qqq);

var a = [1, 2, 3];

var o = {};

var m =
{
    fullName: function () {
        return this.name + this.lastname;
    },
};
function Man(name, lasName, age) {
    var man = {};
    man.name = name;
    man.lastname = lasName;
    man.age = age;
    man.__proto__ = Man.prototype;
    return man;
}
Man.prototype = m;
console.log(new Man("Ivan", "Goncharov", 18).fullName());