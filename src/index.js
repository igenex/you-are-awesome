// DO WHATEVER YOU WANT HERE

/*const createEnumerableProperty = (obj) => {
  "use strict";
  Object.defineProperty(this, obj, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'static'
  });
};*/

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    configurable: true,
    enumerable: false,
    set (value) {
      propertyName = value
    },
    get () {
      return propertyName
    }
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  function Temp(){}
  let temp = new Temp;
  temp.prototype = new Temp();
  return temp;
};


const incrementor = () => {
  return (function () {
    incrementor.counter = ++incrementor.counter || 1;
    return function incr() {
      incrementor.counter++;
      incr.valueOf = incrementor.counter;
      return incr;
    }
  })();
};


const asyncIncrementor = () => {
  asyncIncrementor.counter = ++asyncIncrementor.counter || 0;
  return new Promise((resolve) => {
    resolve(asyncIncrementor.counter);
  });
};

const createIncrementer = () => {
  let arr = [];
  arr.push(1,2,3,4,5,6,7,8,9);
  arr = arr[Symbol.iterator]();

  return arr;

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
};
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
};
const toBuffer = () => {
};
const sortByProto = () => {
};

// exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto