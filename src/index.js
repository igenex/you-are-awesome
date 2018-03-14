// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (obj) => {
  "use strict";
  return true;

};

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
  function Temp() {
  }

  /*let temp = new Temp;
  console.log(temp.prototype);
  console.log(temp.__proto__);*/
  Temp.__proto__ = Temp.prototype;
  return Temp;
};


const incrementor = () => {
  return (function () {
    incrementor.counter = ++incrementor.counter || 1;
    return function incr() {
      incrementor.counter++;
      incr.valueOf = function () {
        return incrementor.counter
      };
      return incr;
    }
  })();
};


const asyncIncrementor = () => {
  asyncIncrementor.counter = ++asyncIncrementor.counter || 1;
  return new Promise((resolve) => {
    resolve(asyncIncrementor.counter);
  });
};

const createIncrementer = () => {
  let arr = [];
  arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
  arr = arr[Symbol.iterator]();

  return arr;

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (item) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1200, item);
  });

};


const getDeepPropertiesCount = (obj) => {
  let count = 0;
  count += Object.keys(obj).length;
  function countProps (object) {
    for(let prop in object) {
      count += Object.keys(object[prop]).length;
      if(typeof object[prop] === 'object') {
        countProps(object[prop])
      }
    }
  }
  countProps(obj);
  return count;
};


const createSerializedObject = () => {
  "use strict";
  return Object.create(null);
};

const object = createSerializedObject();

console.log(typeof object, 'object');
console.log(JSON.parse(JSON.stringify(object)), object);

const toBuffer = () => {
};
const sortByProto = (obj) => {
  obj.sort((a,b) => {
    "use strict";
    return a.__proto__ - b.__proto__;
  });
  return obj;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto