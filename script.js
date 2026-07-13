const perguntas = [
    {
        pergunta: "Quando você participa de um trabalho em grupo, qual costuma ser sua atitude?",
        alternativas: [
            { texto: "Gosto de liderar e tomar decisões.", pontos: {Artigas:3, Lavalleja:1}},
            { texto: "Prefiro enfrentar os desafios sem desistir.", pontos: {Lavalleja:3, Charrua:1}},
            { texto: "Trabalho melhor ajudando e colaborando com todos.", pontos: {Gaúcho:3, Artigas:1}},
            { texto: "Gosto de organizar tudo para que saia certo.", pontos: {Constituinte:3, Gaúcho:1}},
            { texto: "Valorizo minhas raízes, minhas tradições e respeito a natureza.", pontos: {Charrua:3, Constituinte:1}}
        ]
    },

    {
        pergunta: "Qual dessas qualidades mais combina com você?",
        alternativas: [
            { texto: "Liderança.", pontos: {Artigas:3, Constituinte:1}},
            { texto: "Determinação.", pontos: {Lavalleja:3, Artigas:1}},
            { texto: "Companheirismo.", pontos: {Gaúcho:3, Charrua:1}},
            { texto: "Organização.", pontos: {Constituinte:3, Gaúcho:1}},
            { texto: "Resistência.", pontos: {Charrua:3, Lavalleja:1}}
        ]
    },

    {
        pergunta: "Se você vivesse na época da independência do Uruguai, qual seria seu papel?",
        alternativas: [
            { texto: "Liderar as pessoas.", pontos: {Artigas:3, Gaúcho:1}},
            { texto: "Lutar pela liberdade.", pontos: {Lavalleja:3, Artigas:1}},
            { texto: "Ajudar a população no dia a dia.", pontos: {Gaúcho:3, Constituinte:1}},
            { texto: "Criar leis e organizar o país.", pontos: {Constituinte:3, Artigas:1}},
            { texto: "Defender seu povo e sua cultura.", pontos: {Charrua:3, Lavalleja:1}}
        ]
    },

    {
        pergunta: "O que é mais importante para você?",
        alternativas: [
            { texto: "Inspirar outras pessoas.", pontos: {Artigas:3, Gaúcho:1}},
            { texto: "Nunca desistir dos meus objetivos.", pontos: {Lavalleja:3, Charrua:1}},
            { texto: "Trabalhar em equipe.", pontos: {Gaúcho:3, Constituinte:1}},
            { texto: "Fazer tudo com planejamento.", pontos: {Constituinte:3, Artigas:1}},
            { texto: "Preservar aquilo que é importante.", pontos: {Charrua:3, Gaúcho:1}}
        ]
    },

    {
        pergunta: "Como você gostaria de ser lembrado?",
        alternativas: [
            { texto: "Como um grande líder.", pontos: {Artigas:3, Lavalleja:1}},
            { texto: "Como alguém muito corajoso.", pontos: {Lavalleja:3, Charrua:1}},
            { texto: "Como uma pessoa que ajudava os outros.", pontos: {Gaúcho:3, Artigas:1}},
            { texto: "Como alguém justo e inteligente.", pontos: {Constituinte:3, Gaúcho:1}},
            { texto: "Como alguém que protegeu sua cultura e sua história.", pontos: {Charrua:3, Constituinte:1}}
        ]
    }
];


let perguntaAtual = 0;

let pontos = {
    Artigas:0,
    Lavalleja:0,
    Charrua:0,
    Gaúcho:0,
    Constituinte:0
};


const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const botao = document.getElementById("proximo");


function mostrarPergunta(){

    let p = perguntas[perguntaAtual];

    pergunta.innerHTML = p.pergunta;

    alternativas.innerHTML = "";

    p.alternativas.forEach((alt)=>{

        let botaoAlt = document.createElement("button");

        botaoAlt.className = "alternativa";

        botaoAlt.innerHTML = alt.texto;

        botaoAlt.onclick = function(){

            for(let nome in alt.pontos){
                pontos[nome] += alt.pontos[nome];
            }

            perguntaAtual++;

            if(perguntaAtual < perguntas.length){
                mostrarPergunta();
            }
            else{
                mostrarResultado();
            }

        };

        alternativas.appendChild(botaoAlt);

    });

}


function mostrarResultado(){

    document.getElementById("quiz").style.display="none";

    document.getElementById("resultado").style.display="block";


    let vencedor = Object.keys(pontos).reduce((a,b)=>
        pontos[a] > pontos[b] ? a : b
    );


    document.getElementById("nomeResultado").innerHTML = vencedor;


    let descricoes = {

        Artigas:"Você possui liderança, coragem e capacidade de inspirar outras pessoas.",

        Lavalleja:"Você é determinado, resistente e nunca desiste dos seus objetivos.",

        Charrua:"Você valoriza suas raízes, cultura e proteção daquilo que considera importante.",

        Gaúcho:"Você é companheiro, colaborativo e gosta de ajudar os outros.",

        Constituinte:"Você é organizado, justo e pensa antes de tomar decisões."
    };


    document.getElementById("descricao").innerHTML = descricoes[vencedor];

}


mostrarPergunta();
