(function() {
  'use strict';
  /*
  O desafio dessa semana é criar uma mini library (biblioteca) para
  reutilizarmos nossos códigos quando fizermos manipulação de DOM!

  Requisitos:
  - O nome da lib deve ser "DOM".
  - Ela deve ser uma função construtora, que receberá uma string por parâmetro.
  Essa string será o nó do DOM a ser selecionado;
  - No construtor, você deve atribuir à `this.element` todos os elementos
  do DOM selecionados;
  - Extenda a lib para ter os métodos `on`, `off` e `get`.
  - O método `on` irá adicionar um listener de evento a todos os elementos
  selecionados.
  - O método `off` irá remover o listener de evento de todos os elementos
  selecionados.
  - O método `get` deve retornar os elementos.
  - O código abaixo deve funcionar corretamente após a lib criada.

  Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
  Só passe para o próximo problema quando tiver resolvido o anterior :)
  */
  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
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

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})();

// (function() {
//   'use strict';

//   var $div = document.querySelector('[data-js="div"]');
//   var $h1 = document.querySelector('[data-js="h1"]');
//   var $p = document.querySelector('[data-js="p"]');
//   var $button = document.querySelector('[data-js="button"]');
//   var $span = document.querySelector('[data-js="span"]');
//   var $h2 = document.querySelector('[data-js="h2"]');

//   //NodeList
//   console.log($span.parentNode);
//   console.log($div.childNodes);
//   console.log($div.firstChild);
//   console.log($div.lastChild);
//   console.log($h1.nextSibling);
//   console.log($p.previousSibling);
//   console.log($p.nodeType);
//   console.log($div.firstChild.nextSibling.nodeValue);
//   console.log($div.firstChild.nodeValue);
//   console.log($button.nodeName);

//   //HTMLCollection
//   console.log($div.children);
//   console.log($div.firstElementChild);
//   console.log($div.lastElementChild);
//   console.log($div.nextElementSibling);
//   console.log($div.previousElementSibling);
//   console.log($div.childElementCount);

//   //Métodos
//   console.log($div.hasAttribute('class'));
//   console.log($div.hasAttributes());
//   $div.appendChild($button);
//   var $cloneButton = $button.cloneNode(true);
//   $div.insertBefore($cloneButton, $p);
//   console.log($div.hasChildNodes());
//   $div.removeChild($button);
//   $div.replaceChild($h2, $p);

//   var $textarea = document.createElement('textarea');
//   $div.appendChild($textarea);
//   var $text = document.createTextNode('Será que coloca ');
//   $textarea.appendChild($text);

//   //Atributos
//   console.log($div.getAttribute('data-js'));
//   $div.setAttribute('class', 'da-div');
//   console.log($div.attributes);
// })();
