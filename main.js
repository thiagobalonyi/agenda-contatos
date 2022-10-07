const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputnomeAgenda = document.getElementById('nome-agenda');
    const inputnumeroAgenda = document.getElementById('numero-agenda');

    let linha = '<tr>';
    linha += `<td>${inputnomeAgenda.value}</td>`;
    linha += `<td>${inputnumeroAgenda.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputnomeAgenda.value = '';
    inputnumeroAgenda.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}