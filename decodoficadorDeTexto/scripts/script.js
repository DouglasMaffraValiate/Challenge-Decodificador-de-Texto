function criptografar() {
  let textoEntrada = document.getElementById('inputText').value.toLowerCase();
  let textoSaida = document.getElementById('outputText');
  
  textoSaida.value = textoEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
}

function descriptografar() {
  let textoEntrada = document.getElementById('inputText').value.toLowerCase();
  let textoSaida = document.getElementById('outputText');
  
  textoSaida.value = textoEntrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
}

function copiarTexto() {
  let textoSaida = document.getElementById('outputText');
  textoSaida.select();
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência.');
}

function limparCampos(){
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
}