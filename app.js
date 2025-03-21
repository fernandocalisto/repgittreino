function negPosZer0 (num){
    if(num > 0){
        console.log('O número é positivo!');
    }
    else if (num < 0){
        console.log('O número é negativo!');
    }
    else{
        console.log('O número é zero!');
    }
}

function maiorIdade (id){
    if (id >= 18){
        console.log('Maior de Idade!');
    }
    else{
        console.log('Menor de Idade!');
    }
}

function strVazia (str){
    if (str == ''){
        console.log('A string está vazia!');
    }
    else{
        console.log('A string possuí conteúdo!');
    }
}

function bissexto (ano){
    if(ano%4 == 0){
        console.log('O ano é bissexto!');
    }
    else {
        console.log('O ano não é bissexto!');
    }
}

function media (n1,n2){
    if (n1 < 0 || n2 < 0){
        console.log('Insira números Válidos!');
        return;
    }
    console.log((n1+n2)/2);
}

function tamanho (array){
    console.log(array.length);
}

let array = [];
array.push('azul','amarelo','vermelho');

function inclui (array,elemento){
    console.log(array.includes(elemento));
}

let estdArray = [];
estdArray.push('Jose','Igor','Antonio','Melissa');

function verEstd (array,estd){
    console.log(array.includes(estd));
}

function parImpar (array){
    let resPar = 0, resImpar = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 != 0){
            if (resImpar == 0){
                resImpar = array[i];
            }
            else{
                resImpar *= array[i];
            }
        }
        else{
            resPar += array[i];
        }
    }
    console.log(`Soma dos Pares: ${resPar}. Produto dos Ímpares: ${resImpar}`);
}

let numArray = [];
numArray.push(1,2,3,4,5,6);
parImpar(numArray);