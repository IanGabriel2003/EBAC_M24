function Jogo(nome) {
    this.nome = nome;
    
    // this.dizDados = function() {
    //     console.log(this.empresa);
    // }
}

function Dados(nome, empresa, anoLancamento) {
    this.empresa = empresa;
    this.anoLancamento = anoLancamento;
    
    Jogo.call(this, nome);
}

function Criador(nome, criador) {
    this.criador = criador;

    Jogo.call(this, nome);
}

const dadosSonic = new Dados("Sonic", "SEGA", 1991)
const criadorSonic = new Criador("Sonic", "Yuji Naka")
console.log(dadosSonic);
console.log(criadorSonic);

const dadosMario = new Dados("Mario", "Nintendo", 1985)
const criadorMario = new Criador("Mario", "Shigeru Miyamoto")
console.log(dadosMario);
console.log(criadorMario);

const dadosMegaman = new Dados("Megaman", "Capcom", 1987)
const criadorMegaman = new Criador("Megaman", "Akira Kitamura")
console.log(dadosMegaman);
console.log(criadorMegaman);

// dadosSonic.dizDados();