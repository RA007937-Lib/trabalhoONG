
let selecionados = [];

let numeros = document.getElementById("numeros");

for (let i = 1; i <= 40; i++) {
    let botao = document.createElement("button");

    botao.innerText = String(i).padStart(2, "0");
    botao.classList.add("numero");

    botao.onclick = function() {
        escolherNumero(i, botao);
    };

    numeros.appendChild(botao);
}

function escolherNumero(numero, botao) {
    if (selecionados.includes(numero)) {
        selecionados = selecionados.filter(n => n !== numero);
        botao.classList.remove("selecionado");
    } else {
        selecionados.push(numero);
        botao.classList.add("selecionado");
    }

    atualizarTotal();
}

function atualizarTotal() {
    let quantidade = selecionados.length;
    let total = quantidade * 5;

    document.getElementById("quantidade").innerText = quantidade;

    document.getElementById("total").innerText =
        total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}

function confirmarRifa() {
    let mensagem = document.getElementById("mensagem-rifa");

    if (selecionados.length === 0) {
        mensagem.innerText = "Escolha pelo menos um número!";
        return;
    }

    let lista = selecionados
        .sort((a, b) => a - b)
        .map(n => String(n).padStart(2, "0"))
        .join(", ");

    let total = selecionados.length * 5;

    mensagem.innerText =
        "Números escolhidos: " + lista +
        " | Total: R$ " + total.toFixed(2).replace(".", ",");
}
