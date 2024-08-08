for (let i=0; i<=10; i++){
    console.log(i);
}

console.log(`
///////////////////////////////////////////////////////////////////////////
`)

for (let i=0; i<=20; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log(`
///////////////////////////////////////////////////////////////////////////
`)

let soma = 0;
for (let i=0; i<=100; i++){
    soma += i;
}
console.log(soma);

console.log(`
///////////////////////////////////////////////////////////////////////////
`)

let tab = 0
for (let i=0; i<=10; i++){
    tab = 5 * i;
    const res = `5 * ${i} = ${tab}`;
    console.log(res);
}