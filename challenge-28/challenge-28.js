(function(win, doc) {
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function app() {
    var $cepInput = doc.querySelector('[data-js="cepInput"]');
    var $button = doc.querySelector('[data-js="button"]');
    var $logradouro = doc.querySelector('[data-js="logradouro"]');
    var $bairro = doc.querySelector('[data-js="bairro"]');
    var $estado = doc.querySelector('[data-js="estado"]');
    var $cidade = doc.querySelector('[data-js="cidade"]');
    var $cep = doc.querySelector('[data-js="cep"]');
    var $status = doc.querySelector('[data-js="status"]');


    $button.addEventListener('click', submit);

    function submit(e) {
      e.preventDefault();
      getCep();
    }

    function getCep() {
      var ajax = createAjax();
      addMessage(ajax);
      hasReadyState(ajax);
    }

    function createAjax() {
      var ajax = new XMLHttpRequest();
      ajax.open('get', `https://ws.apicep.com/cep/${validCep()}.json`);
      ajax.send();
      return ajax;
    }

    function validCep() {
      return $cepInput.value.match(/\d+/g).join('');
    }

    function hasReadyState(ajax) {
      ajax.addEventListener('readystatechange', function() {
        addMessage(ajax);
        if(ajax.readyState === 4 && ajax.status === 200)
          responseToObject(ajax);
      });
    }

    function responseToObject(ajax) {
      var cepObj = JSON.parse(ajax.responseText);
      addValueToElement(cepObj);
    }

    function addValueToElement(cepObj) {
      $logradouro.value = cepObj.address;
      $bairro.value = cepObj.district;
      $estado.value = cepObj.state;
      $cidade.value = cepObj.city;
      $cep.value = cepObj.code;
    }

    function addMessage(ajax) {
      if(ajax.readyState !== 4)
      $status.innerHTML = 'Buscando informações para o CEP ' + validCep() + ' ...';
      if(ajax.readyState === 4){
        var cepObj = JSON.parse(ajax.responseText);
        if(cepObj.status === 200)
          $status.innerHTML = 'Endereço referente ao CEP ' + validCep() + ':';
        if(cepObj.status !== 200)
          $status.innerHTML = 'Não encontramos o endereço para o CEP ' + validCep() + '.';
      }
    }
  }

  app();

})(window, document);
// var ajax = new XMLHttpRequest();
// ajax.open('get', 'data.json');
// ajax.send();

// var response;
// ajax.addEventListener('readystatechange', function() {
//   if(isRequestOk()) {
//     console.log('mudou', ajax.readyState, ajax.status);
//     try{
//       response = JSON.parse(ajax.responseText);
//       console.log('Requisição ok', response.cor );
//     }
//     catch(e) {
//       response = ajax.responseText;
//     }
//     console.log(response);
//   }
// }, false);

// function isRequestOk() {
//   return ajax.readyState === 4 && ajax.status === 200;
// }
