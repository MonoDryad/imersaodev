// ------------------Cards----------------- \\

var carta1 = {
  nome: "Jean-Luc Picard",
  imagem:
    "https://stt.wiki/w/images/thumb/1/1b/Enterprise-D_Picard_Head.png/180px-Enterprise-D_Picard_Head.png",
  atributos: {
    diplomacia: 294,
    agressividade: 213,
    inteligencia: 321,
    liderança: 433
  }
};

var carta2 = {
  nome: "William Thomas Riker",
  imagem:
    "https://stt.wiki/w/images/thumb/b/b3/Commander_Riker_Head.png/180px-Commander_Riker_Head.png",
  atributos: {
    diplomacia: 263,
    agressividade: 341,
    inteligencia: 300,
    liderança: 412
  }
};

var carta3 = {
  nome: "Geordi La Forge",
  imagem:
    "https://stt.wiki/w/images/thumb/8/80/Chief_Engineer_La_Forge_Head.png/100px-Chief_Engineer_La_Forge_Head.png",
  atributos: {
    diplomacia: 231,
    agressividade: 132,
    inteligencia: 420,
    liderança: 324
  }
};

var carta4 = {
  nome: "Worf",
  imagem:
    "https://stt.wiki/w/images/thumb/c/cf/Security_Chief_Worf_Head.png/180px-Security_Chief_Worf_Head.png",
  atributos: {
    diplomacia: 102,
    agressividade: 531,
    inteligencia: 211,
    liderança: 344
  }
};

var carta5 = {
  nome: "Dr. Beverly Crusher",
  imagem:
    "https://stt.wiki/w/images/thumb/a/ad/CMO_Crusher_Head.png/100px-CMO_Crusher_Head.png",
  atributos: {
    diplomacia: 122,
    agressividade: 0,
    inteligencia: 431,
    liderança: 32
  }
};

var carta6 = {
  nome: "Deanna Troi",
  imagem:
    "https://stt.wiki/w/images/thumb/8/84/Counselor_Troi_Head.png/100px-Counselor_Troi_Head.png",
  atributos: {
    diplomacia: 120,
    agressividade: 120,
    inteligencia: 221,
    liderança: 201
  }
};

var carta7 = {
  nome: "Data",
  imagem:
    "https://stt.wiki/w/images/thumb/0/0b/Lt._Commander_Data_Head.png/100px-Lt._Commander_Data_Head.png",
  atributos: {
    diplomacia: 0,
    agressividade: 300,
    inteligencia: 300,
    liderança: 0
  }
};

var carta8 = {
  nome: "Wesley Crusher",
  imagem:
    "https://stt.wiki/w/images/thumb/d/dc/Wesley_Crusher_Head.png/100px-Wesley_Crusher_Head.png",
  atributos: {
    diplomacia: 500,
    agressividade: 500,
    inteligencia: 500,
    liderança: 500
  }
};

var carta9 = {
  nome: "Tasha Yar",
  imagem:
    "https://stt.wiki/w/images/thumb/8/81/Lt._Tasha_Yar_Head.png/100px-Lt._Tasha_Yar_Head.png",
  atributos: {
    diplomacia: 125,
    agressividade: 351,
    inteligencia: 251,
    liderança: 258
  }
};

var carta10 = {
  nome: "Guinan",
  imagem:
    "https://stt.wiki/w/images/thumb/c/c6/Fierce_Guinan_Head.png/100px-Fierce_Guinan_Head.png",
  atributos: {
    diplomacia: 50,
    agressividade: 50,
    inteligencia: 450,
    liderança: 300
  }
};

var carta11 = {
  nome: "Q",
  imagem:
    "https://stt.wiki/w/images/thumb/e/e0/Captain_Q_Head.png/100px-Captain_Q_Head.png",
  atributos: {
    diplomacia: 499,
    agressividade: 499,
    inteligencia: 499,
    liderança: 499
  }
};

var carta12 = {
  nome: "Hugh",
  imagem:
    "https://stt.wiki/w/images/thumb/7/78/Hugh_Head.png/100px-Hugh_Head.png",
  atributos: {
    diplomacia: 150,
    agressividade: 150,
    inteligencia: 150,
    liderança: 151
  }
};

var carta13 = {
  nome: "Spock",
  imagem:
    "https://stt.wiki/w/images/thumb/8/80/Ambassador_Spock_Head.png/100px-Ambassador_Spock_Head.png",
  atributos: {
    diplomacia: 498,
    agressividade: 100,
    inteligencia: 490,
    liderança: 300
  }
};

var carta14 = {
  nome: "Kahless",
  imagem:
    "https://stt.wiki/w/images/thumb/1/13/Kahless_the_Unforgettable_Head.png/100px-Kahless_the_Unforgettable_Head.png",
  atributos: {
    diplomacia: 0,
    agressividade: 481,
    inteligencia: 0,
    liderança: 501
  }
};

var carta15 = {
  nome: "Kirk",
  imagem:
    "https://stt.wiki/w/images/thumb/a/ae/Captain_Kirk_Head.png/120px-Captain_Kirk_Head.png",
  atributos: {
    diplomacia: 350,
    agressividade: 350,
    inteligencia: 350,
    liderança: 351
  }
};

var carta16 = {
  nome: "Kira",
  imagem:
    "https://stt.wiki/w/images/thumb/9/90/Commander_Kira_Nerys_Head.png/200px-Commander_Kira_Nerys_Head.png",
  atributos: {
    diplomacia: 50,
    agressividade: 450,
    inteligencia: 250,
    liderança: 211
  }
};

// ------------------Var----------------- \\

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16
];

var cartaMaquina;
var cartaJogador;

// ------------------Function Maquina----------------- \\

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 16);
  cartaMaquina = cartas[numeroCartaMaquina];

  // ------------------Function Jogador----------------- \\

  var numeroCartaJogador = parseInt(Math.random() * 16);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 16);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  console.log(numeroCartaJogador);

  // ------------------Botões------------------- \\
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
  exibirCartaJogador();
}

// ------------------Function 3------------ \\

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  //   for (var atributos in cartaJogador.atributos) {
  //     opcoesTexto +=
  //       "<input type='radio' name='atributos' value=" +
  //       atributos +
  //       ">" +
  //       atributos;
  //   }
  //   opcoes.innerHTML = opcoesTexto;
}

// ------------------Function 4------------ \\

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributos");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

// ------------------Function 5------------ \\

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Vitória!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Derrota!";
  } else {
    elementoResultado.innerHTML = "Empate!";
  }

  console.log(cartaMaquina);
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributos in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributos' value=" +
      atributos +
      ">" +
      atributos +
      " " +
      cartaJogador.atributos[atributos] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributos in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributos' value=" +
      atributos +
      ">" +
      atributos +
      " " +
      cartaMaquina.atributos[atributos] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}