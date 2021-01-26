(function() {
  'use strict';

  // Truthy e Falsy, Condicional ternário
  var bool = null;
  var text = bool ? 'é truthy' : 'é falsy';
  console.log(text, bool);

  // Escopo de variáveis
  console.log(esc);
  var esc;
  esc = 'escopo';

  function escopo() {
    var esc = 'car';
    console.log(esc);
  }
  escopo();
  console.log(esc);

  //acessando um objeto, usando a chamada de array
  var objArray = {
    'a': 'Primeira letra',
    'b': 'Segunda letra',
    3: 'Terceira letra'
  };

  console.log(objArray.a);
  console.log(objArray['b']);
  console.log(objArray['3']);
  console.log(objArray[3]);

  //Métodos e propriedades de Array
  var arr = [1,2,3,4,5,6];

  console.log(arr.length);
  console.log(arr.push(7));

  //Hoisting da função
  function hois() {
    return ting()
    function ting() {
      var nome = 'Douglas';
      return nome;
    }
  }
  console.log(hois());

  //IIFE
  (function autoExecutavel() {
    console.log('Eu sou auto executável!');
  })();

  //Wrapper Objects
  console.log('Douglas'.length);

  var name = new String('Douglas');
  console.log(name.length);


  console.log(Number('23'));
  console.log(String(23));

  console.log(typeof 23);
  console.log(typeof 'Douglas');
  console.log(typeof true);

  //For in
  var objIn = {
    cor: 'Azul',
    cor2: 'Vermelho',
    cor3: 'Roxo'
  };

  for(var cor in objIn) {
    console.log(cor);
  }

  //Criação de Objetos
  var objMutavel = {
    game: 'God of War'
  };
  objMutavel.game = 'Resident Evil 4';
  console.log(objMutavel.game);

  var objReferencia = objMutavel;
  objReferencia.publisher = 'Ubisoft';
  console.log(objMutavel);
  console.log(objMutavel === objReferencia);


  var obj1 = {
    cor: 'Green'
  }

  var obj2 = {
    cor: 'Green'
  }

  console.log(obj1 == obj2);

  var objConstrutor = new Object(obj1);
  console.log(objConstrutor);
  objConstrutor.cor = 'Blue';
  console.log(obj1);

  //Herança em objetos

  var objCreate = Object.create(obj1);
  objCreate.cor = 'Blue';
  console.log(objCreate === obj1);
  console.log(objCreate.hasOwnProperty('cor'));

  //Métodos de Objeto
  var objMetodos = {
    language: 'English',
    work: 'Developer',
    age: 23,
  };

  console.log(Object.keys(objMetodos));
  console.log(obj1.isPrototypeOf(objCreate));
  var objString = JSON.stringify(objMetodos);
  console.log(objString);
  console.log(JSON.parse(objString));

  //Métodos de Array
  var arr = [1,2,3,4,5,6,7,8];

  console.log(arr.join('-'));
  console.log(arr.reverse());
  console.log(arr.sort());
  console.log(arr.toString());
  console.log(arr.concat(9,10));
  console.log(arr.shift());
  console.log(arr.unshift(1));

  console.log(arr.slice(2));
  console.log(arr.slice(4,7));
  console.log(arr.slice(3, -2));

  console.log(arr.splice(6));
  console.log(arr.splice(2,4));
  console.log(arr.splice(2, 0, 3,4,5,6,7,8));
  console.log(arr);

  arr.forEach(function(item, index, arr) {
    console.log(item, index);
  });

  var arrEvery = arr.every(function(item, index, arr) {
    return item > index;
  });
  console.log(arrEvery);

  var arrSome = arr.some(function(item, index, arr) {
    return item > 7;
  });
  console.log(arrSome);

  arr.map(function(item, index, arr) {
    console.log(item + 5);
  });

  var arrFilter = arr.filter(function(item, index, arr) {
    return item % 2 === 0;
  });
  console.log(arrFilter);

  var arrReduce = arr.reduce(function(acumulado, valorAtual, index, arr) {
    return acumulado + valorAtual;
  }, 23);
  console.log(arrReduce);

  console.log(arr.indexOf(6, 3));

  console.log(Array.isArray(arr));

  //quem é o this
  function constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  var objThis = new constructor('Douglas', 23, 'Developer');
  console.log(objThis);

  //Objeto arguments
  function showArguments() {
    return arguments ;
  }

  console.log(showArguments(1,2,3,4,5,6));

  //Objeto String, propriedades e métodos
  var tft = 'Team Fight Tatics';
  console.log(tft.length);
  console.log(tft.charAt(5));
  console.log(tft.concat(' o melhor jogo Chess!'));
  console.log(tft.indexOf('F',4));
  console.log(tft.replace('Team', 'Time'));
  console.log(tft.slice(0, 8));
  console.log(tft.split(' '));
  console.log(tft.substring(8, 3));
  console.log(tft.toLocaleLowerCase());
  console.log(tft.toUpperCase());

  //Métodos de string usando Regex
  console.log(tft.match(/t/gi));
  console.log(tft.replace(/(team) (fight)/gi, function($1) {
    return $1.toLocaleLowerCase();
  }));
  console.log(tft.split(/fight/gi));
  console.log(tft.search(/f/gi));

  //Construtor de Regex e métodos da RegExp
  var regex = new RegExp('abcd', 'gi');
  var textRegExp = 'As letras abcd e também as mesmas letras ABCD do alfabeto.';
  console.log(regex.exec(textRegExp));
  console.log(regex.test(textRegExp));

  //DOM

  // alert('Olha aqui');
  // console.log(prompt('Olha o promp'));
  // console.log(confirm('será que confirma'));

  var $button = document.querySelector('[data-js="button"]');
  var alo = $button.addEventListener('mouseout', function(event) {
    console.log(event);
    return event;
  })
  var confirm = alo || 'Ops, não confirmado!';//Curto cirtuito
  console.log(confirm);

  //Sync e Async
  setTimeout(() => {
    console.log('Se passaram 3 segundos!');
  }, 3000);

  var stopInterval = setInterval(function() {
    console.log('2 segundos se passaram!');
  }, 2000);

  clearInterval(stopInterval);

  var cont = 0;
  console.time();
  function setTimeoutRecursive() {
    var stopTimeout = setTimeout(function() {
      console.log('Set Timeout Recursivo');
      cont++;
      setTimeoutRecursive();
    }, 2000);
    cont >= 3 ? clearTimeout(stopTimeout) : '';
  }
  console.timeEnd();
  setTimeoutRecursive();

  //Funções: propriedades e métodos
  var myVar = function MyFunction() {
    return true;
  };

  console.log(myVar.name);
  console.log(myVar.length);
  console.log(myVar.toString());

  function MyFunction() {
    return arguments;
  }

  console.log(MyFunction.call(null, 2,4));
  console.log(MyFunction.apply(null, [2,3,4,5,6]));

  //Transformando Array Like em Array
  function ArrayTrue() {
    return Array.prototype.map.call(arguments, function(item) {
      return item + 27;
    });
  }

  console.log(ArrayTrue(2,4,6,8,10));

})();
//var
