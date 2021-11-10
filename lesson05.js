// "use strict";
// i = 5;
// c(i);
// j = 7;
// c(j);

// function f() {
//     "use strict"; // строгий режим, только все новое, должен идти перед операторами, на самом верху
//     k = 10;
//     c(10);
// }
// f();
// class Man {
//     className = "Class man";
//     static classDescription = "Класс предназначен для создания объектов";
//     static len(string) {
//         return string.length;
//     }
//     constructor(name, lastName) {
//         this.name = name;
//         this.lastName = lastName;
//     }
//     get birthDate() {return this._birthDate;}
//     set birthDate(val) {this._birthDate = val;}
//     fullName() {
//         return this.lastName + " " + this.name;
//     }
//     age() {
//         var birtDate = new Date(this.birthDate);
//         var currentDate = new Date();
//         var diff = currentDate.getTime() - birtDate.getTime();
//         var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
//         return diffYears;
//     }
// }

// var man1 = new Man("Ivan", "Ivanov");
// man1.birthDate = "2000-01-01";
// c(man1);
// c(man1.fullName());
// c(man1.age());

// class Teacher extends Man {
//     constructor(name, lastName, departmentL) {
//         super(name, lastName);
//         this.department = departmentL
//     }
// }

// var teacher1 = new Teacher("Petr", "Petrov", "Physics kafedra");
// c(teacher1);

// function Add10(x) {
//     x+=10;
// }
// var y = 1;
// c(y);
// Add10(y);
// c(y);

// var o = {p1:1, p2:2};
// c(o);
// changeObject(o);
// c(o);
// function changeObject(obj) {
//     // obj = {p3:3}; // перебить нельзя
//     obj.p1 = 100;
//     obj.p2 = 200;
// }
// "use strict";
// var o1 = {p1:1, p2:2};
// // var o2 = o1;
// // o2.p1 = 100;
// // c(o1.p1);
// var o3 = {};
// Object.assign(o3, o1);
// o3.p1 = 100;
// c(o1.p1);

// o4 = {...01};
// c(o4);

// var o1 = {p11:11, p12:12};
// var o2 = {p21:21, p22:22};
// var o3 = {p31:31, p32:32};
// var o4 = {p11:11111, p32:3232};
// var o = {};
// Object.assign(o4, o1, o2, o3, o4);
// c(o4);

// var o1 = {p1:1};
// o2 = Object.create(o1, {
//    p2:{value:2},
//     p3:{
//         value: 42,
//         writable: false,
//         enumerable: false,
//         configurable: false
//     },
//     p4: {
//         enumerable:true,
//         set:function(v) {
//             _p4 = v;
//         },
//         get:function() {return p4;}
//     }
// });
// c(o2, o2.__proto__, o2.p2);
// Назначает новые св-ва объекту o1

// Object.defineProperties(o1, {
//     p2:{value:2},
//      p3:{
//          value: 42,
//          writable: false,
//          enumerable: false,
//          configurable: false
//      },
//      p4: {
//          enumerable:true,
//          set:function(v) {
//              this._p4 = v;
//          },
//          get:function() {return this.p4;}
//      }
//  });

//  Object.defineProperty(o1, "p10",
//     {
//         value: 42,
//         writable: false,
//         enumerable: false,
//         configurable: false
//     }
// );

// o1.p4 = 400
//  c(o2, o2.__proto__, o2.p2);

//  c(Object.entries(o1));