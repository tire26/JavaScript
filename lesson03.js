// cl("фывфыа");

// cl("sad =", 23, "ASdad");

// var a1 = [1, 2, 3];
// var a2 = a1;
// cl(a1, a2);
// // a2[0] = 7;
// // cl(a1, a2);
// var a3 = [...a1]; // копия, аналогично var w = {...window}
// a3[0] = 2;
// cl(a1, a3);
// calculateFactorial(200n, cl);

// var o = {value:5, f:calculateFactorial};
// o.f(undefined, cl);

// var oo = {value:7};

// o.f.call(oo, undefined, cl); // вызов метода f как метода объекта oo
// o.f.apply(o, [undefined, cl]); // тоже самое
// f10 = calculateFactorial.bind(window, 10); // создается новая функция со значениями по умолчанию(первый параметр всегда this)

// f10(cl);

// foo = o.f.bind(oo, undefined);

// foo(cl);

// oo.value = 20;

// foo(cl)

// var f = (x,y) => x + y;
// cl(f(1,2));

// var g = () => {
//      var s = prompt();
//     return "Вы ввели: " + s;
// }
// cl(g());
// var x = () => cl(this); // нельзя ищменить this при таком способе
// 
// x();
// 
// var o  = {f:x};
// o.f();
// x.call(o);

// cl(5 + "5");
// cl("5" + 5);
// cl(5 + Number("5"));
// cl(5 + "5"*1);
// cl(!!5);
// cl(!![]);
// cl(!!null);
// cl(!!undefined);
// cl(String(cl));
// cl(String());
// o.toString = () => "Hello world";
// cl([] + {});
// cl({} + [] );
// cl(String([1, 2, 3, 4]));
// cl("" + {});
// cl(1/2);

// cl(randomNum(1, 4));

// var s = new String("hello world");
// cl(s.constructor);
// cl(s.__proto__);
// cl(String.prototype);
// cl(s.constructor === String);
// cl(s.__proto__ ===s.constructor.prototype);

// var s = new String("ASD");
// cl(s instanceof String);
// cl(s.toLocaleLowerCase());

// s.__proto__ = Number.prototype;
// cl(s instanceof String);
// cl(s instanceof Number);
// cl(s.toLocaleLowerCase());
// cl(s);


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var _person = {
//     sayName: function() {return this.name},
//     sayAge: function() {return this.age},
// };
// Person.prototype = _person;
// _person.constructor = Person;

// var p1 = new Person("ivan", 18);
// cl(p1.sayAge());
// cl(p1 instanceof Person);
// cl(p1 instanceof Object);


// function Student(name, age, university, course) {

//     Person.call(this, name, age);
//     // this.name = name;
//     // this.age = age;
//     this.university = university;
//     this.course = course;
// }
// _student.__proto__ = Person.prototype;
// var _student = {
//     sayUniversity: function() {return this.university},
//     sayCourse: function() {return this.course},
// };
// Student.prototype = _student;
// Student.prototype.__proto__ = Person.prototype;
// _student.constructor = Student;


// var student1 = new Student("ivan", 19, "MAI", 2);
// var student2 = new Student("alex", 19, "MAI", 2);
// cl(student1.sayName() + student2.sayName());
// cl(s instanceof Person);

// a(c(1));
// c(a(1));

function Str(strings) {
    this.size = strings.length;
    this.strings = strings;
}
var _str = {
    valueOf: function() {
        return this.strings[Math.random() * this.size];
    },
    getSize: function() {
        return this.size;
    },
    getStrings: function() {
        return this.strings;
    } 
};
Str.prototype = _str;
Str.prototype.__proto__ = Object.prototype;
_str.constructor = Str;

var s = new Str(["1", "2","322", "5", "4", "3"]);
c(s.getSize());
c(s.getStrings());
c(s.valueOf());   
