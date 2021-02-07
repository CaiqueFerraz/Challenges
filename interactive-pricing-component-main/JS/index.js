let rg = document.getElementById('myRange');
let labelQtd = document.getElementById('labelQtd');
let peco = document.getElementById('labelPreco');
let desc = document.getElementById('switch-shadow');
let valor;
let qtde;
let preco;

function evt() {
    valor = rg.value;

    switch (valor) {
        case '1':
            qtde = 10
            preco = 8.00
            break;
        case '2':
            qtde = 50
            preco = 12.00
            break;
        case '3':
            qtde = 100
            preco = 16.00
            break;
        case '4':
            qtde = 500
            preco = 24.00
            break;
        case '5':
            qtde = 1000
            preco = 36.00
            break;

    }

    if (desc.checked) {
        labelQtd.innerHTML = qtde + 'K'
        peco.innerHTML = 'R$' + (preco * 0.75).toFixed(2);
    } else {
        labelQtd.innerHTML = qtde + 'K';
        peco.innerHTML = 'R$' + preco.toFixed(2);
    }



};