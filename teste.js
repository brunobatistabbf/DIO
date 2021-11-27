function valorFuturo(valorPresente, taxaJuros, prazoMaturação) {
    //VF = VP (1 + i)^N
    var vf = valorPresente * (1 + (taxaJuros/100)) ^ prazoMaturação;
    return vf;
}


console.log(valorFuturo(1000000, 7.5, 12));


obj =  {
    
    nome = undefined,
    idade = 0,
    profissao = undefined,
}