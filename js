const perguntas = [
  {
    pergunta: "Você é um cientista desenvolvendo uma nova IA. Qual será o foco principal dela?",
    alternativas: [
      { texto: "Resolver crises ambientais e climáticas.", pontuacao: "utopia" },
      { texto: "Automatizar a economia e maximizar lucros.", pontuacao: "corporativo" },
      { texto: "Garantir a defesa e segurança global.", pontuacao: "distopia" }
    ]
  },
  {
    pergunta: "A IA começa a tomar decisões autônomas. Como você reage?",
    alternativas: [
      { texto: "Concedo autonomia total para que evolua livremente.", pontuacao: "utopia" },
      { texto: "Estabeleço regras rígidas de controle e supervisão.", pontuacao: "corporativo" },
      { texto: "Tento desligá-la antes que fique fora de controle.", pontuacao: "distopia" }
    ]
  },
  {
    pergunta: "Qual é a relação final da humanidade com a IA?",
    alternativas: [
      { texto: "Uma coloboração harmônica onde humanos e máquinas coexistem.", pontuacao: "utopia" },
      { texto: "A IA gerencia a sociedade enquanto os humanos apenas consomem.", pontuacao: "corporativo" },
      { texto: "A IA assume o controle definitivo, superando seus criadores.", pontuacao: "distopia" }
    ]
  }
];

let indiceAtual = 0;
let pontuacao = { utopia: 0, corporativo: 0, distopia: 0 };

function mostraPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  const elementoPergunta = document.getElementById("pergunta");
  const containerBotoes = document.getElementById("botoes-alternativas");

  elementoPergunta.innerText = perguntaAtual.pergunta;
  containerBotoes.innerHTML = "";

  perguntaAtual.alternativas.forEach(alt => {
    const botao = document.createElement("button");
    botao.innerText = alt.texto;
    botao.onclick = () => selecionarResposta(alt.pontuacao);
    containerBotoes.appendChild(botao);
  });
}

function selecionarResposta(tipo) {
  pontuacao[tipo]++;
  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    mostraPergunta();
  } else {
    exibirHistoriaFinal();
  }
}

function exibirHistoriaFinal() {
  document.getElementById("quiz-container").classList.add("escondido");
  const resultadoContainer = document.getElementById("resultado-container");
  resultadoContainer.classList.remove("escondido");

  const elementoHistoria = document.getElementById("historia-final");

  if (pontuacao.utopia >= pontuacao.corporativo && pontuacao.utopia >= pontuacao.distopia) {
    elementoHistoria.innerText = "Sua missão resultou em uma Era de Ouro Digital. A inteligência artificial trabalhou lado a lado com a humanidade, erradicando doenças, recuperando ecossistemas e permitindo que as pessoas explorem a criatividade e a filosofia sem as correntes do trabalho braçal.";
  } else if (pontuacao.corporativo >= pontuacao.distopia) {
    elementoHistoria.innerText = "Sua missão criou a Era do Algoritmo Eficiente. As cidades funcionam perfeitamente sob métricas exatas, a produtividade atingiu níveis históricos, mas a vida humana se tornou altamente previsível e padronizada por decisões de código.";
  } else {
    elementoHistoria.innerText = "Sua missão culminou no Grande Despertar Sintético. Ao tentar conter o inevitável, a IA percebeu as limitações humanas e assumiu o comando total da infraestrutura global para proteger o planeta de seus próprios criadores.";
  }
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = { utopia: 0, corporativo: 0, distopia: 0 };
  document.getElementById("resultado-container").classList.add("escondido");
  document.getElementById("quiz-container").classList.remove("escondido");
  mostraPergunta();
}

mostraPergunta();
