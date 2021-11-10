function calculateFactorial(num, callBackFunction = undefined) {
    var result;
    // var resultsMap;
    if (typeof (calculateFactorial.resultList) != "object") {
        calculateFactorial.resultList = {};
    }
    if (typeof (calculateFactorial.count) != "number") {
        calculateFactorial.count = 0;
    }

    calculateFactorial.count++;

    if (num == undefined) {
        if (typeof (this.value) == "number") {
            num = this.value;
        }
    }

    if (typeof (num) == "number") {
        num = BigInt(num);
    }
    // if(resultsMap == undefined) {
    //     resultsMap = new Map();
    // }

    if (num < 0) {
        result = undefined;
        // } else if (num > Number.MAX_SAFE_INTEGER) {
        //     result = undefined;
        // } else if (Math.floor(num) != num) {
        //     result = undefined
    }
    else if (num == 0) {
        result = 1n;
    } else if (typeof (calculateFactorial.resultList[num]) == "number") {
        result = calculateFactorial.resultList[num];
    } else {
        result = 1n;
        for (let i = 1n; i <= num; i++) {
            result *= i;
        }

        calculateFactorial.value = num;
        calculateFactorial.result = result;
        // calculateFactorial.resultsMap.set(num, result);
        calculateFactorial.resultList[num] = result;
        // console.log("Put data in cash", num, result, calculateFactorial.resultList)
    }
    if (typeof (callBackFunction) == "function") {
        callBackFunction(result);
    }
    if (this.constructor == calculateFactorial) {
        this.value = num;
        this.calculateFactorial = result;
    } else {
        return result;
    }

}

// var factorialWithCount =
// function(_f) {
//     var count = 0;
//     var f = 
//         function (n) {
//             count++;
//             return _f(n);
//         }
//         f.getCount = function() {return count;}
//         return f;
// }(calculateFactorial);

function cl(value, ...valueRest) { // ... - оператор rest, value - массив

    console.log(value, ...valueRest); // оператор spread
}

function r(min, max) {
    var result;

    if (typeof min != "number") {
        result = undefined;
        cl("Первое не число");
    } else if (typeof max != "number") {
        result = undefined;
        cl("Второе не число");
    } else if (max < min) {
        cl("Второе меньше первого");
        result = undefined;
    } else {
        var tmp = max - min;
        tmp = Math.round(tmp * Math.random());
        result = min + tmp;
    }
    return result;
}


function MagicString(value) {

} MagicString.prototype = new String();

function a(val) {
    alert(val);
    return val;
}

function b(val, isClear = false) {
    var body = document.getElementsByTagName("body")[0]
    if (isClear) {
        body.innerHTML = "";
    }
    body.innerHTML += val;
    return val;
}

function c(val, ...values) {
    console.log(val, ...values);
    return val;
}

function MagicString(...array) {
    this.array = array;
    this.numberOfStrings = array.length;
}

var _str = {
    valueOf() {
        var stringToPrintNumber =
            Math.round(this.numberOfStrings * Math.random()) % 10;
        c(stringToPrintNumber);
        return this.array[stringToPrintNumber];
    },
    toString() {
        var stringToPrintNumber =
            Math.round(this.numberOfStrings * Math.random()) % 10;
        c(stringToPrintNumber);
        return this.array[stringToPrintNumber];
    },
};

MagicString.prototype = _str;
_str.constructor = MagicString;
MagicString.prototype.__proto__ = String;

function MagicPhrase(massive) {
    var magicStrings = new Array();
    var i = 0;
  
    for (const element in massive) {
      magicStrings[i++] = new MagicString(element);
    }
  
    // massive.__proto__ = Array;
    // massive.forEach((element) => {
    //   magicStrings[i++] = new MagicPhrase(element);
    // });
  }
  
  var _magicPhrase = new String();
  _magicPhrase.valueOf = function () {
    var resString = "";
    magicStrings.forEach((element) => {});
  };
  
  function c(val, ...values) {
    console.log(val, ...values);
    return val;
  }
  
  function b(val, isClear = false) {
    var body = document.getElementsByTagName("body")[0];
    if (isClear) {
      body.innerHTML = "";
    }
    body.innerHTML += val;
    return val;
  }

  function defineGetterAndSetter(object, propertyName) {
    var id = Symbol(propertyName);
    object.__defineGetter__(propertyName, function () {
      c("getter for " + propertyName);
      return object[id];
    });
    object.__defineSetter__(propertyName, function (val) {
      c("setter for " + propertyName);
      object[id] = val;
    });
  }