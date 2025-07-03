const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um bruxo exilado que vive escondido nas ruas de Londres. Uma névoa mágica cobre a cidade.",
        alternativas: [
            "Você decide seguir o rastro da névoa em busca de sua origem.",
            "Prefere se proteger e se esconder, esperando que passe."
        ]
    },
    {
        enunciado: "No beco, você encontra um velho bruxo ferido, murmurando sobre uma seita que se aproxima.",
        alternativas: [
            "Você o ajuda e oferece abrigo.",
            "Você o interroga para descobrir o que sabe."
        ]
    },
    {
        enunciado: "O velho revela que um artefato sombrio foi ativado nos túneis de metrô.",
        alternativas: [
            "Você parte imediatamente em busca do artefato.",
            "Você tenta avisar outros bruxos primeiro."
        ]
    },
    {
        enunciado: "Você encontra o artefato pulsando com magia corrompida.",
        alternativas: [
            "Você tenta usar o artefato para derrotar a seita.",
            "Você o destrói, mesmo sem saber o custo."
        ]
    }
];

let atual = 0;
let escolhas = [];
let perguntaAtual;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = perguntaAtual.alternativas[i];
        botaoAlternativas.addEventListener("click", () => {
            escolhas.push(i);
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da Jornada";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";

    const todas1 = escolhas.every((e) => e === 0);
    const todas2 = escolhas.every((e) => e === 1);

    if (todas1) {
        textoResultado.textContent = "Você seguiu o caminho da bravura. Ao investigar a névoa, ajudou o velho bruxo, partiu em busca do artefato e tentou usá-lo. Sua coragem salvou Londres, mas o poder te corrompeu. Agora, você governa os becos da cidade com punho de ferro.";
    } else if (todas2) {
        textoResultado.textContent = "Você escolheu sempre a segurança. Se escondeu da névoa, interrogou o velho, avisou os outros e destruiu o artefato. A cidade está a salvo... mas o preço foi alto. Ninguém lembra do seu nome. Você vive esquecido, mas vivo.";
    } else {
        textoResultado.textContent = "Você seguiu um caminho incerto. Às vezes foi ousado, outras vezes prudente. Ajudou, mas também desconfiou. No fim, você destruiu o artefato e desapareceu. Alguns dizem que morreu. Outros, que agora vive entre os dois mundos. Seu destino virou lenda.";
    }
}

mostraPergunta();
