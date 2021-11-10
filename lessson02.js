var o1 = {};
var o2 = {};

// console.log(o1 == o2); //false
// console.log(o1 < o2); //false
// console.log(o1 <= o2); //true -> console.log(!(o1 > o2))

// Функция Факториал(число)
{
    // Если у объекта this есть свойство value, то расчитываем его факториал
    // Проверка: Тип Число = Число
    // Проверка: Число больше или равно 0
    // Проверка максимальное значение не выше допустимого
    // Проверка: Число должно быть целым

    // Если число = 0, то Возврат 1
    // Присвоить значение Результат равно 1
    // Цикл: от 1 до Число
    {
        // Результат = Результат * Переменная цикла
    }
    //  Возврат Резульат
}


// console.log(calculateFactorial(10)); // console.log - для отладки

// var o = { f: calculateFactorial, value: 7 }
// console.log(o.f(undefined));

// console.log(1 && 2); // 2
// console.log(1 && 0); // 0
// console.log(0 && 1); // 0

// console.log(1 || 2); // 1
// console.log(1 || 0); // 1
// console.log(0 || 1); // 1

// var obj = { f: function (x, y) { return x + y; } };
// console.log(obj.f(5, 7));

// var fff = obj.f;
// console.log(fff(5,7));

// var num = new calculateFactorial(10);
// console.log(num);

// var n = new Number(5);
// console.log(n.constructor == Number);
// console.log("1" == 1); // true с приведением
// console.log("1" === 1); // false без
// console.log(calculateFactorial(10));
// console.log(calculateFactorial(10));
// calculateFactorial.count = "qqq";
// console.log(calculateFactorial(10));
// console.log(calculateFactorial(10));
// var o = { f: calculateFactorial, value: 7 }
// console.log(o.f(10));
// var num = new calculateFactorial(10);
// console.log(calculateFactorial.count);


// console.time();
// console.log(calculateFactorial(100));
// console.timeEnd();

// console.time();
// console.log(calculateFactorial(100));
// console.timeEnd();

// console.time();
// console.log(calculateFactorial(100));
// console.timeEnd();

// console.time();
// console.log(calculateFactorial(100));
// console.timeEnd();

// console.time();
// console.log(calculateFactorial(100));
// console.timeEnd();
// calculateFactorial(10, console.log);
// calculateFactorial(10, alert); // alert - выводит как сообщение на странице
// function msg(str) {
//     console.log(document.getElementsByTagName("body").item(0));
//     console.log(document.getElementsByTagName("body"));
//     // document.getElementsByTagName("body")[0].innerHTML = str; // получили массив эл-ов с тегом боди

// }
// calculateFactorial(10, msg);
// var a = document.getElementsByTagName("h1");
// console.log(a);
// console.log(a[1]);

// function f(_delta = 1) {
//     var _count = 0;

//     return function(delta = _delta) {
//         _count += delta;
//         return _count;
//     }
// }

// var medium = f();

// console.log(medium());
// console.log(medium());
// console.log(medium());
// console.log(medium());
// console.log(medium(100));

// var medium100 = f(100);
// console.log(medium100());
// console.log(medium100());
// console.log(medium100());

// (function(x, y) {console.log(x + y);})(1, 2);

// var medium20 = 
// function() {
//     var _count = 0;

//     return function(delta = 20) {
//         _count += delta;
//         return _count;
//     }
// }();
// console.log(medium20());
// console.log(medium20());
// console.log(medium20());
// var add =
//     function () {
//         var count = 0;
//         var f = 
//         function (x, y) {
//             count++;
//             return x + y;
//         }
//         f.count = function() {return count;}
//         return f;
//     }();
// console.log(add(1, 2));
// console.log(add(3, 4));
// console.log(add(2, 4));
// console.log(add.count());


// var qqq = factorialWithCount;
// console.log(factorialWithCount(1));
// console.log(factorialWithCount(2));
// console.log(factorialWithCount(3));
// console.log(factorialWithCount(4));
// console.log(qqq(5));
// console.log(qqq(6));
// console.log(qqq(7));
// console.log(qqq(8));
// console.log(factorialWithCount.count());

// var calculateFactorial = function(x){return x;}
calculateFactorial(10, cl)
