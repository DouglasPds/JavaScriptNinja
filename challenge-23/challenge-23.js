(function(win, doc) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $one = doc.querySelector('[data-js="one"]');
  var $two = doc.querySelector('[data-js="two"]');
  var $three = doc.querySelector('[data-js="three"]');
  var $four = doc.querySelector('[data-js="four"]');
  var $five = doc.querySelector('[data-js="five"]');
  var $six = doc.querySelector('[data-js="six"]');
  var $seven = doc.querySelector('[data-js="seven"]');
  var $eight = doc.querySelector('[data-js="eight"]');
  var $nine = doc.querySelector('[data-js="nine"]');
  var $zero = doc.querySelector('[data-js="zero"]');

  var $plus = doc.querySelector('[data-js="plus"]');
  var $minus = doc.querySelector('[data-js="minus"]');
  var $times = doc.querySelector('[data-js="times"]');
  var $dividedBy = doc.querySelector('[data-js="dividedBy"]');
  var $equals = doc.querySelector('[data-js="equals"]');
  var $cancelEntry = doc.querySelector('[data-js="cancelEntry"]');
  var $input = doc.querySelector('[data-js="input"]');

  var numbers = [$zero, $one, $two, $three, $four, $five, $six, $seven, $eight, $nine];
  var arrSymbol = [$plus, $minus, $times, $dividedBy];
  var objSymbol = {
    '0': '+',
    '1': '-',
    '2': '*',
    '3': '/'
  };

  (function addNumberInput() {
    numbers.forEach(function(item, index) {
      item.addEventListener('click', function() {
        if($input.value == 0)
          return $input.value = index;
        $input.value += index;
      })
    });
  })();

  (function clear() {
    $cancelEntry.addEventListener('click', function() {
      $input.value = 0;
    })
  })();

  (function addSymbolInput() {
    arrSymbol.forEach(function(item, index) {
      item.addEventListener('click', function() {
        removeLastItem();
        $input.value += objSymbol[index];
      })
    })
  })();

  (function result() {
    $equals.addEventListener('click', function() {
      removeLastItem();
      var allValues = $input.value.match(/\d+[+*/-]?/g);
      $input.value = allValues.reduce(function(acumulado, atual) {
        var firstValue = acumulado.slice(0, -1);
        var operador = acumulado.split('').pop();
        var lastValue = ifLastItenIsASymbol(atual) ? atual.slice(0, -1) : atual;
        var lastOperator = ifLastItenIsASymbol(atual) ? atual.split('').pop() : '';

        switch (operador) {
          case '+':
            return (Number(firstValue) + Number(lastValue) + lastOperator);
          case '-':
            return (Number(firstValue) - Number(lastValue) + lastOperator);
          case '*':
            return (Number(firstValue) * Number(lastValue) + lastOperator);
          case '/':
            return (Number(firstValue) / Number(lastValue) + lastOperator);
        }

      })
    })
  })();

  function removeLastItem() {
    if(ifLastItenIsASymbol($input.value)) {
      $input.value = $input.value.slice(0, -1);
    }
  }

  function ifLastItenIsASymbol(valor) {
    return /[+*/-]$/g.test(valor);
  }

})(window, document);
