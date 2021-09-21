var filmesNome = ["Clube da Luta", "Matrix"];
var filmesImagem = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];
var filmesSinopse = [
  "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
  "Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
];

for (var i = 0; i < filmesNome.length; i++) {
  document.getElementById("listaFilmes").innerHTML =
    document.getElementById("listaFilmes").innerHTML +
    "<h2>" +
    filmesNome[i] +
    " </h2><img src=" +
    filmesImagem[i] +
    "><p>" +
    filmesSinopse[i] +
    "</p></br>";
}

function adicionarFilme() {
  //document.write("<h2>Teste</h2>");-->Assim vai zerar a tela toda, tem que usar o InnerHTML
  if (document.getElementById("filmeNome").value == "") {
    window.alert("É necessário inserir o Nome do filme");
  } else if (document.getElementById("filmeImagem").value == "") {
    window.alert("É necessário inserir a URL da imagem do filme");
  } else if (document.getElementById("filmeSinopse").value == "") {
    window.alert("É necessário inserir o texto da sinopse do filme");
  } else {
    //    window.alert("Tudo OK");
    gravarFilme();
  }
}
//document.write("<h1><strong>" + filme1 + "</strong></h1>");
function gravarFilme() {
  //listaFilmes.push("O exterminador do futuro");
  filmesNome.push(document.getElementById("filmeNome").value);
  filmesImagem.push(document.getElementById("filmeImagem").value);
  filmesSinopse.push(document.getElementById("filmeSinopse").value);

  document.getElementById("filmeNome").value = "";
  document.getElementById("filmeImagem").value = "";
  document.getElementById("filmeSinopse").value = "";

  imprimirFilme();
}

function imprimirFilme() {
  document.getElementById("listaFilmes").innerHTML = "";
  for (var i = 0; i < filmesNome.length; i++) {
    document.getElementById("listaFilmes").innerHTML =
      document.getElementById("listaFilmes").innerHTML +
      "<h2>" +
      filmesNome[i] +
      ' <button onClick="excluirFilme()">Excluir Filme</button> </h2><img src=' +
      filmesImagem[i] +
      "><p>" +
      filmesSinopse[i] +
      "</p></br>";
  } //FALTA CONSEGUIR INSERIR UM BOTÃO A CADA FILME
}

function excluirFilme() {
  window.alert("OK");
}