Algoritmo "alg"

Var
x: inteiro
pe, al, imc : real
class: vetor[1..6] de caractere
Inicio
class[1] <- "abaixo do peso"
class[2] <- "peso normal"
class[3] <- "sobrepeso"
class[4] <- "obesidade grau 1"
class[5] <- "obesidade grau 2"
class[6] <- "obesidade grau 3"

escreva("Digite seu peso e altura: ")
leia(pe, al)
imc:=pe/(al^2)
se (imc < 18.5) entao
    x:=1
senao
    se (imc >= 18.5) e (imc < 24.9) entao
        x:=2
    senao
        se (imc >= 25) e (imc < 29.9) entao
            x:=3
        senao
            se (imc >= 30) e (imc < 34.9) entao
               x:=4
            senao
                 se (imc >= 35) e (imc < 39.9) entao
                 x:=5
                     senao
                          x:=6
                 fimse
            fimse
        fimse
    fimse
fimse



escreva(class[x])
Fimalgoritmo
