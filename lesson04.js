var s1 = new String("QQQ");
var s2 = "KKK";
// c(typeof s1);
// c(typeof s2);
// c(s1.length + " " + s2.length);

// c(s1.length + " " + new String(s2).length); // явно преобразуем примитивный тип к объектному

// c(typeof "1qq");
// c(typeof 111);
// c(typeof true);
// c(typeof 111n);
// c(typeof null);
// c(typeof undefined);
// c(typeof Symbol("qqq"));
// c(typeof {});
// c(typeof []);
// c(typeof function () {});

var s = new MagicString([
    "Hello",
    "World",
    "AAAA",
    "BBBBB",
    "CCCCCC",
    "DDDDDD",
    "EEEEEE",
    "FFFFFFFF",
    "GGGGGGGGG",
    "HHHHHHHHHHH",
  ]);
  
//   c(s);
  
//   for (var i = 0; i < 10; i++) {
//     b(s + " " + s + "<br>");
//   }
  
//   s.stringList = ["Вас взломали"];
  
//   for (var i = 0; i < 10; i++) {
//     b(s + " " + s + "<br>");
//   }
  
//   var s1 = Symbol("s1");
//   c(s1);
//   c(s1.description);
//   var s2 = Symbol("s1");
  
//   c(s1, s2, s1 == s2);
  
//   var o = {};
//   o.qqq = 1;
//   o["kkk"] = 2;
//   c(o);
//   c(o["qqq"], o.kkk);
//   o["hello world"] = true;
//   c(o["hello world"]);
  
  // var propertyName = "zzz";
  // o.propertyName; // обращение к свойству propertyName
  // o[propertyName]; // обращение к свойству zzz
  
//   id1 = Symbol.for("qqq"); // создаёт новый символ в реестре символов
//   id2 = Symbol.for("qqq"); // если вызвать 2 раз, то вернёт
//   c(id1 == id2);
//   c(Symbol.keyFor(id1));
//   magic phrase
  
  var mp = MagicPhrase([
    [
      "Hello",
      "World",
      "AAAA",
      "BBBBB",
      "CCCCCC",
      "DDDDDD",
      "EEEEEE",
      "FFFFFFFF",
      "GGGGGGGGG",
      "HHHHHHHHHHH",
    ],
    [
      "Hello",
      "World",
      "AAAA",
      "BBBBB",
      "CCCCCC",
      "DDDDDD",
      "EEEEEE",
      "FFFFFFFF",
      "GGGGGGGGG",
      "HHHHHHHHHHH",
    ],
    [
      "Hello",
      "World",
      "AAAA",
      "BBBBB",
      "CCCCCC",
      "DDDDDD",
      "EEEEEE",
      "FFFFFFFF",
      "GGGGGGGGG",
      "HHHHHHHHHHH",
    ],
    ["."],
  ]);
  
//   for (var i = 0; i < 10; i++) {
//     b(mp + "<br>");
//   }
  
  // !!! циклы !!!
//   var a = ["e1", "e2", "e3"];
  //перебор индексов
//   for (const i in a) {
//     c(i);
//   }
  //перебор значений (отсутствует у объектов)
//   for (const i of a) {
    // c(i);
//   }
  
//   var o = { a: "p1", b: "p2", c: "p3" };
  //перебор названий свойств
//   for (const i in o) {
//     c(i);
//   }
  //перебор значений (1 вариант)
//   for (const i in o) {
//     c(i, "=", o[i]);
//   }
  //перебор значений (2 вариант)  предварительным получением массива свойств
//   for (const i of Object.values(o)) {
//     c(i);
//   }
  
  //геттеры и сеттеры
  var module = {};
  module.version = "1.1"; // ! так не надо
  module.author = "rufus20145";
  
  module.__defineGetter__("version", function () {
    c("getter for version");
    return this.__version;
  });
  module.__defineSetter__("version", function (val) {
    c("setter for version");
    this.__version = val;
  });
  module.__defineGetter__("author", function () {
    c("getter for author");
    return this.__author;
  });
  module.__defineSetter__("author", function (val) {
    c("setter for author");
    this.__author = val;
  });
  
  defineGetterAndSetter(module, "date");
  defineGetterAndSetter(module, "author");
  defineGetterAndSetter(module, "version");
  
  c(module.version);
  module.version = "1.2.3";
  c(module.version);
  
//   c(module.author);
//   module.author = "rufus20145";
//   c(module.author);
  
//   c(module.date);
//   module.date = "10.02.2021";
//   c(module.date);
//   c(module);
  
//   function defineGetterAndSetter(object, propertyName) {
//     var id = Symbol(propertyName);
//     object.__defineGetter__(propertyName, function () {
//       c("getter for " + propertyName);
//       return object[id];
//     });
//     object.__defineSetter__(propertyName, function (val) {
//       c("setter for " + propertyName);
//       object[id] = val;
//     });
//   }
  
  // delete module.date;
  // c(module.date);
  
//   Object.defineProperty(module, "comment", {
//     configurable: false,
//     // writable: true,
//     enumerable: false,
//     set: function (val) {
//       c("setter for comment");
//       this.__comment = val;
//     },
//     get: function () {
//       c("getter for comment");
//       return this.__comment;
//     },
//   });
  // delete module.comment;
  
//   c(module.comment);
//   module.comment = "1232131.2.3";
//   c(module.comment);
  // module.__defineGetter__("comment", function () {
  //   c("getter for comment");
  //   return "Вас взломали";
  // });
  
//   for (var i in module) {
//     c(i, "=", module[i]);
//   }
  
  // for (var i in window) {
  //   b(i + "=" + window[i] + "<br>");
  // }
  
  // var moduleNew = {};
  
  // moduleNew.__defineGetter__("version", module.__lookupGetter__("version")); // геттеры можно заимствовать у других объектов
  // moduleNew.__defineSetter__("version", module.__lookupSetter__("version"));
  
  // c(moduleNew.version);
  // moduleNew.version = "1.2.3";
  // c(moduleNew.version);
  
//   var moduleSuperNew = Object.create(module, {
//     dependencies: {
//       configurable: false,
//       enumerable: false,
//       set: function (val) {
//         c("setter for dependencies");
//         this.__dependencies = val;
//       },
//       get: function () {
//         c("getter for dependencies");
//         return this.__dependencies;
//       },
//     },
//     name: {
//       configurable: false,
//       enumerable: false,
//       get: function () {
//         return "Super New module";
//       },
//     },
//   });
  
//   c(moduleSuperNew);
  // moduleSuperNew.name = "new name";
  // c(moduleSuperNew);
  //
  //
  //
  //
  //
  //
  // оно тут временно для отладки
//   function MagicString(stringList) {
//     var id = Symbol("stringList");
//     this[id] = stringList;
//     this.getStringList = function () {
//       return this[id];
//     };
//   }
  
//   var _magicString = new String();
//   _magicString.valueOf = function () {
//     var index = r(0, this.getStringList().length - 1);
//     return this.getStringList()[index];
//   };
//   _magicString.toString = _magicString.valueOf;
  
//   MagicString.prototype = _magicString;
//   _magicString.constructor = MagicString;
  
  //
  //
  //
//   function MagicPhrase(massive) {
//     var magicStrings = new Array();
//     var i = 0;
  
//     for (const element in massive) {
//       magicStrings[i++] = new MagicString(element);
//     }
  
//     // massive.__proto__ = Array;
//     // massive.forEach((element) => {
//     //   magicStrings[i++] = new MagicPhrase(element);
//     // });
//   }
  
//   var _magicPhrase = new String();
//   _magicPhrase.valueOf = function () {
//     var resString = "";
//     magicStrings.forEach((element) => {});
//   };
  
//   function c(val, ...values) {
//     console.log(val, ...values);
//     return val;
//   }
  
//   function b(val, isClear = false) {
//     var body = document.getElementsByTagName("body")[0];
//     if (isClear) {
//       body.innerHTML = "";
//     }
//     body.innerHTML += val;
//     return val;
//   }