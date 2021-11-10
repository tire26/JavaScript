var a = [1, 2, 3, 4, 5];
// a.forEach(function(val) {c(val)});

// c(a.includes(3));
// c(a.includes(3, 4));

// c(a.indexOf(3));
// c(a.includes(3, 4));

// c(a.join());
// c(a.join(" "));
// c(a.join(" - "));

// var iterator = a.keys();
// for(var i = 0; i < a.length; i++) {
//     c(iterator.next().value);
// }

// var iterator = a.entries();
// for(var j = 0; j < a.length; j++) {
//     c(iterator.next().value);
// }

// c("pop ",a.pop(), a);
// c("push",a.push(9), a);
// c("shift",a.shift(), a);
// c("unshift",a.unshift(9), a);

// var result = a.reduce(function(prevVal, curVal){c("prev ", prevVal, "cur", curVal);
//     return prevVal + curVal;
// });
// c("a.reduce ",result);

// var result = a.reduceRight(function(prevVal, curVal){c("prev ", prevVal, "cur", curVal);
//     return prevVal + curVal;
// });
// c("a.reduceRight ",result);

// var b = a.reverse();
// c("every ", a.every(val => val == 5));
// c("some ", a.some(val => val == 5));

// a = [...b];
// c("a", a);
// var b = a.sort();
// c("a", a, "b", b,)

// var o = {p1:1, p2:2, p3:3}
// var p1 = 11;
// with(o) {
//     c("p1 = ", o.p1, "p1 =", p1);
//     c("p1 = ", p1, "p2 =", p2, "p3=", p3);
// }

var m = new Map();