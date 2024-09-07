function exercicio1(a,b,c){
    console.log(`A + B é igual a ${a+b}.`);
    if(a+b < c){
        console.log("A + B é menor que C.");
    }else{
        console.log("A + B não é menor que C.");
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
    console.log(`C é igual a ${c}.`);
}

const exercicio4 = (num) =>{
    console.log(`O antecessor de ${num} é ${num-1} e o sucessor de ${num} é ${num+1}.`);
}

const exercicio5 = (valorSalarioMinimo, valorSalarioUsuario) =>{
    console.log(`O usuário ganha ${valorSalarioUsuario/valorSalarioMinimo} salário mínimos.`);
}

const exercicio6 = (valor) =>{
    console.log(`O valor ${valor} com o reajuste de 5 porcento fica com o valor de ${valor*1.05}.`);
}

function exercicio7(logico1, logico2){ 
    if(logico1 == true && logico2 == true){
        console.log("Ambos são verdadeiros.");
    }else if(logico1 == false && logico2 == false){
        console.log("Ambos são falsos.");
    }else{
        console.log("Um é verdadeiro e outro é falso.");
    }
}

function exercicio8(valor1, valor2, valor3){
    let numeros = [valor1, valor2, valor3];
    numeros.sort();
    numeros.reverse();
    console.log(`Valores em ordem descrecente ${numeros[0]}, ${numeros[1]}, ${numeros[2]}.`);
}

function exercicio9(peso, altura){
    let imc = peso/(altura*altura);
    if(imc<18.5){
        console.log("Abaixo do peso.");
    }else if(imc > 18.6 && imc <24.9){
        console.log("Peso ideal (parabéns).");
    }else if(imc > 25 && imc <29.9){
        console.log("Levemente acima do peso.");
    }else if(imc > 30 && imc <34.9){
        console.log("Obesidade grau I.");
    }else if(imc > 35 && imc <39.9){
        console.log("Obesidade grau II (severa).");
    }else if(imc >= 40){
        console.log("Obesidade grau III (mórbida).");
    }
}

function exercicio10(nota1, nota2, nota3){
    let mediaFinal = (nota1 + nota2 + nota3)/3;
    console.log(`A média final do aluno é ${mediaFinal}.`);
}

function exercicio11(nota1, nota2, nota3, nota4, nomeAluno){
    let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;
    console.log(mediaFinal >=7 ? `O aluno ${nomeAluno} teve média ${mediaFinal} e foi aprovado.` : `O aluno ${nomeAluno} teve média ${mediaFinal} e foi reprovado.`) ;
}

function exercicio12(valor, codigo){
    if(codigo == 1){
        valor*=0.85;
        console.log(`Valor final pago será ${valor}.`);
    }else if(codigo == 2){
        valor*=0.9;
        console.log(`Valor final pago será ${valor}.`);
    }else if(codigo == 3){
        console.log(`Valor final pago será ${valor}.`);
    }else if(codigo == 4){
        valor*=1.1;
        console.log(`Valor final pago será ${valor}.`);
    }
}

function exercicio13(nome,idade){
    console.log(idade < 18 ? `${nome} tem ${idade} anos e é menor de idade.` : `${nome} tem ${idade} anos e é maior de idade.`);
}

function exercicio14(a, b){
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b)
}

let valorSalarioMinimo = 1293.20;
let valorSalarioUsuario = 25864.00;

//exercicio1(10, 20, 30);
//exercicio2(-11);
//exercicio3(10,10);
//exercicio4(10)
//exercicio5(valorSalarioMinimo, valorSalarioUsuario);
//exercicio6(10);
//exercicio7(false, false);
//exercicio8(3,2,1);
//exercicio9(80,1.70);
//exercicio10(0, 8, 5);
//exercicio11(0, 8, 5, 7, "Eduardo Carrilho");
//exercicio12(100, 4);
//exercicio13('Eduardo', 24);
exercicio14(1,2);


