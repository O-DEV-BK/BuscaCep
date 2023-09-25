const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');
const bairro = document.getElementById('bairro');
const logradouro = document.getElementById('logradouro');
const cidade = document.getElementById('localidade');
const UF = document.getElementById('uf');
const box = document.querySelector('.box');




btnCep.addEventListener('click', handleClick);
btnCep.addEventListener('click', ativar);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
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
  // buscaCep(cep);
  box.classList.add('ativo');
};




























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
