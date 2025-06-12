const caixaPrincipal = document.querySelector(".caixa.principal")
const caixaPergunta = document.querySelector(".caixa.perguntas")
const caixaAlternativas = document.querySelector(".caixa.alternativas")
const caixaReultados = document.querySelector(".caixa.resultaos")
const TextoResultados = document.querySelector(".texto.resultados")

const perguntas = [
    {
        enuciado: "pergunta 1",
        alternativas: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuciado: "pergunta 1",
        alternativas: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuciado: "pergunta 1",
        alternativas: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuciado: "pergunta 1",
        alternativas: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enuciado
}

mostraPergunta();

console.log(caixaPrincipal)