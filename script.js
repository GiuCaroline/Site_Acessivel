//Aumentar e Diminuir fonte
window.onload = function () {
  //Seleciona o elemento <body> para que possamos alterar seu estilo.
  var corpoDaPagina = document.querySelector("body");
  var aumentarTexto = document.getElementById("aumentar-texto");
  var diminuirTexto = document.getElementById("diminuir-texto");
  // O padrão de tamanho equivale a 100% do valor definido no style
  var fontSize = 100;
  // Valor percentual de 10% que irá aumentar ou diminuir do padrão da fonte
  var qntAumentarDiminuir = 10;
  // Evento de click para aumentar a fonte
  aumentarTexto.addEventListener("click", function (event) {
    fontSize = fontSize + qntAumentarDiminuir;
    corpoDaPagina.style.fontSize = fontSize + "%";
  });
  // Evento de click para diminuir a fonte
  diminuirTexto.addEventListener("click", function (event) {
    fontSize = fontSize - qntAumentarDiminuir;
    corpoDaPagina.style.fontSize = fontSize + "%";
  });
};

//ALTO CONTRASTE
document.getElementById("alternar-contraste").addEventListener
("click", function () {
    document.body.classList.toggle("alto-contraste");
});

//PRETO E BRANCO
document.getElementById("preto-e-branco").addEventListener
("click", function () {
    document.body.classList.toggle("preto-e-branco");
});

//V LIBRA
new window.VLibras.Widget('https://vlibras.gov.br/app');

