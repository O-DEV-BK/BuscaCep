const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');
const bairro = document.getElementById('bairro');
const logradouro = document.getElementById('logradouro');
const cidade = document.getElementById('localidade');
const UF = document.getElementById('uf');
const box = document.querySelector('.box')
const cep = inputCep.value;



btnCep.addEventListener('click', handleClick);
btnCep.addEventListener('click', ativar);
btnCep.addEventListener('click', reload);

function handleClick(event) {
  event.preventDefault();
  buscaCep(cep)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => {
      bairro.innerText = body.bairro;
      logradouro.innerText = body.logradouro;
      cidade.innerText = body.localidade
    })
}


function ativar() {
  // if (box.classList.contains('ativo')) {
  //   box.classList.remove('ativo')
  // } else {
  //   box.classList.add('ativo')
  // }
  box.classList.add('ativo');
};


// // $(document).ready(function() {
// //   const btnReload = $('#btnReload');
// //   const contentDiv = $('#content');

// function reload() { 
// // Faz uma solicitação AJAX para obter o novo conteúdo
// // fetch(`http://127.0.0.1:5500/index.html?cep=${cep}`)
// .then(response => response())
// .then(body =>{
//   box.innerHTML = body;
//   console.log('ola')

// })
// }
// url: 'novopconteudo.html', // Substitua pelo seu URL ou caminho
//   success: function(data) {
//     contentDiv.html(data); // Atualiza o conteúdo da div
//   },
// error: function() {
//   console.log('Erro ao carregar novo conteúdo.');
// }

























// const btcDisplay = document.querySelector('.btc')

// function fetchBtc(){
//   fetch('https://blockchain.info/ticker')
//   .then(response => response.json())
//   .then(btcJson => {
//     btcDisplay.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',');
//   })
// }
// fetchBtc();


// const btnProx = document.querySelector('.proximo')
// const paragrafo = document.querySelector('.piada')

// function puxarPiada(){
//   fetch('https://api.chucknorris.io/jokes/random')
// .then(r => r.json())
// .then(piada =>{
//   paragrafo.innerText = piada.value
// })
// }

// btnProx.addEventListener('click', puxarPiada);


// puxarPiada();
