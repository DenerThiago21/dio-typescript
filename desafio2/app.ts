// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    atriz,
    Atriz,
    padeiro,
    Padeiro
}

//forma 1
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz
};

//forma2
interface Pessoa  {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

//forma3
interface Pessoa3 {
    nome: string,
    idade: string | number,
    profissao: string
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

//forma4
type Pessoa4 = {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa4: Pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: 'padeiro'
}