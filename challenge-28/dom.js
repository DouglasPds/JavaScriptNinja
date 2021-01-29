(function(document) {
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback);
    })
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.prototype.isArray = function isArray( param ) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Undefined]' || Object.prototype.toString.call(param) === '[object Null]';
  };

  window.DOM = DOM;
})(document);

  // var $a = new DOM('[data-js="link"]');

  // console.log(DOM.prototype.isArray([1,2,3]));
  // console.log(DOM.prototype.isObject({cor: 'Azul'}));
  // console.log(DOM.prototype.isFunction(function() {}));
  // console.log(DOM.prototype.isNumber(23));
  // console.log(DOM.prototype.isString('Douglas'));
  // console.log(DOM.prototype.isBoolean(2 === 2));
  // console.log(DOM.prototype.isNull(null));
  // console.log(DOM.prototype.isNull(undefined));

  // $a.forEach(function(item) {
  //   console.log(item.firstChild.nodeValue);
  // });
  // $a.map(function(item) {
  //   console.log(item);
  // });
  // console.log($a.filter(function(item, index) {
  //   return (item.childNodes[0].nodeValue === 'Link 1');
  // }));
  // console.log($a.reduce(function(acumulado, item) {
  //   return (acumulado + item.firstChild.nodeType);
  // },0));
  // console.log($a.reduceRight(function(acumulado, item) {
  //   return (acumulado + item.firstChild.nodeType);
  // },0));
  // console.log($a.every(function(item) {
  //   return item.firstChild.nodeType > 2;
  // }));
  // console.log($a.some(function(item) {
  //   return item.firstChild.nodeType % 3 === 0;
  // }));

  // $a.on('click', function handleClick(e) {
  //   e.preventDefault();
  //   console.log('clicou');
  // });
