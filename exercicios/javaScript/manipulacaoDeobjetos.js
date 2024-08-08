let pessoa = { 
    nome: "jao",
    idade: 222,
    cidade: "aqui"
}

pessoa.profissao = "trabalho";

console.log(pessoa);
console.log(pessoa.cidade);

delete pessoa.idade;
console.log(pessoa);

for (let chave in pessoa){
    console.log(chave + ` : ` + pessoa[chave]);
}

console.log(`
///////////////////////////////////////////////////////////////////////////
`)

