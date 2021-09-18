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

function calculateFactorial(num) {
    var result;
    if(typeof(calculateFactorial.count) != "number") {
        calculateFactorial.count = 0;
    }
    calculateFactorial.count++;

    // console.log(this);
    if (num == undefined) {
        if (typeof (this.value) == "number") {
            num = this.value;
        }
    }
    if (typeof (num) != "number") {
        result = undefined;
    } else if (num < 0) {
        result = undefined;
    } else if (num > Number.MAX_SAFE_INTEGER) {
        result = undefined;
    } else if (Math.floor(num) != num) {
        result = undefined
    }
    result = 1;
    if (num == 0) {
        result = 1;
    }
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    calculateFactorial.value = num;
    calculateFactorial.result = result;
    if (this.constructor == calculateFactorial) {
        this.value = num;
        this.calculateFactorial = result;
    } else {
        return result;
    }

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
console.log(calculateFactorial(10));
console.log(calculateFactorial(10));
calculateFactorial.count = "qqq";
console.log(calculateFactorial(10));
console.log(calculateFactorial(10));
var o = { f: calculateFactorial, value: 7 }
console.log(o.f(10));
var num = new calculateFactorial(10);
console.log(calculateFactorial.count);