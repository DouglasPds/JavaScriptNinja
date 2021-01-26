(function(win, doc) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  win.addEventListener('load', function() {
    console.log('A página foi carregada');
  }, false)

  win.addEventListener('focus', function() {
    console.log('elemento focado');
  })

  win.addEventListener('blur', function() {
    console.log('Elemento sem foco');
  })

  win.addEventListener('beforeprint', function() {
    console.log('oh o print');
  })

  win.addEventListener('resize', function() {
    console.log('resizee');
  })

  win.addEventListener('scroll', function() {
    console.log('scrollado');
  })

  win.addEventListener('auxclick', function() {
    console.log('Click auxiliar');
  })



})(window, document);
