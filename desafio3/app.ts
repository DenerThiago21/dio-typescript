// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLOutputElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma: number, saldo: number): void {
    saldo = saldo + soma;
    campoSaldo.innerHTML = saldo.toString();
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value), Number(campoSaldo.textContent));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**

 */