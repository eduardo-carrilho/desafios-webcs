function exercicio1(a,b,c){
    console.log(`A + B é igual a ${a+b}.`);
    if(a+b < c){
        console.log("A + B é menor que C.");
    }else{
        console.log("A + B não é menor que C.")
    }
}



function exercicio2(num){
    if(num%2 == 0 && num>=0){
        console.log(`O número ${num} é par e positivo.`);
    }else if(num%2 == 0 && num<0){
        console.log(`O número ${num} é par e negativo.`);
    }else if(num%2 != 0 && num>=0){
        console.log(`O número ${num} é ímpar e positivo.`);
    }else if(num%2 != 0 && num<0){
        console.log(`O número ${num} é ímpar e negativo.`);
    }
}

function exercicio3(a,b){
    let c = 0;
    if(a == b){
        c = a + b;
    }else{
        c = a * b;
    }

    console.log(`C é igual a ${c}.`)
}

const exercicio4 = (num) =>{
    console.log(`O antecessor de ${num} é ${num-1} e o sucessor de ${num} é ${num+1}.`)
}

const exercicio5 = (valorSalarioMinimo, valorSalarioUsuario) =>{
    console.log(`O usuário ganha ${valorSalarioUsuario/valorSalarioMinimo} salário mínimos.`)
}

const exercicio6 = (valor) =>{
    console.log(`O valor ${valor} com o reajuste de 5 porcento fica com o valor de ${valor*1.05}.`)
}

function exercicio7(logico1, logico2){ 
    if(logico1 == true && logico2 == true){
        console.log("Ambos são verdadeiros");
    }else if(logico1 == false && logico2 == false){
        console.log("Ambos são falsos");
    }else{
        console.log("Um é verdadeiro e outro é falso");
    }
}

let num1 = 10;
let num2 = 20;
let num3 = 40;
let num4 = -11;
let num5 = 10;
let valorSalarioMinimo = 1293.20;
let valorSalarioUsuario = 25864.00;

//exercicio1(num1, num2, num3);
//exercicio2(num4);
//exercicio3(num1,num5);
//exercicio4(num5)
//exercicio5(valorSalarioMinimo, valorSalarioUsuario);
//exercicio6(num5);
exercicio7(false, false)



