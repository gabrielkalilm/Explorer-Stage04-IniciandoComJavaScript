//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World")
console.log("Hello World")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

{
let varOne = 25;
let varTwo = 32;

let sum = varOne + varTwo

console.log(sum)
}


//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".  
{
let varOne = "teste";
let varTwo = 36;

let typeOfOne = typeof varOne;
let typeOfTwo = typeof varTwo;

console.log(typeOfOne)
console.log(typeOfTwo)

switch(typeOfOne == "number"){
case true:
  console.log("É um número")
break
default:
  console.log("Não é um número")
}

switch(typeOfTwo == "number"){
case true:
  console.log("É um número")
break
default:
  console.log("Não é um número")
}
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

{
  let varOne = "teste";
  let varTwo = 98;
  
  let typeOfOne = typeof varOne;
  let typeOfTwo = typeof varTwo;
  
  console.log(typeOfOne)
  console.log(typeOfTwo)
  
  switch(typeOfOne == "string"){
  case true:
    console.log("É uma string")
  break
  default:
    console.log("Não é uma string")
  }
  
  switch(typeOfTwo == "string"){
  case true:
    console.log("É uma string")
  break
  default:
    console.log("Não é uma string")
  }
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
{
  let varOne = true;
  let varTwo = 98;
  
  let typeOfOne = typeof varOne;
  let typeOfTwo = typeof varTwo;
  
  console.log(typeOfOne)
  console.log(typeOfTwo)
  
  switch(typeOfOne == "boolean"){
  case true:
    console.log("É um booleano")
  break
  default:
    console.log("Não é um booleano")
  }
  
  switch(typeOfTwo == "boolean"){
  case true:
    console.log("É um booleano")
  break
  default:
    console.log("Não é um booleano")
  }
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

{
  let varOne = 25;
  let varTwo = 32;

  let sub = varOne - varTwo

  console.log(sub)
}

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

{
  let varOne = 25;
  let varTwo = 32;

  let mult = varOne * varTwo

  console.log(mult)
}

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

{
  let varOne = 25;
  let varTwo = 32;

  let div = varOne / varTwo

  console.log(div.toFixed(2))
}

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

{
  let varOne = 1;
  let varTwo = 2;
  
  let restDivOne = varOne % 2;
  let restDivTwo = varTwo % 2;
  
  switch(restDivOne){
  case 0:
    console.log("É um número par")
  break
  default:
    console.log("Não é um número par")
  }
  
  switch(restDivTwo){
  case 0:
    console.log("É um número par")
  break
  default:
    console.log("Não é um número par")
  }
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
{
  let varOne = 1;
  let varTwo = 2;
  
  let restDivOne = varOne % 2;
  let restDivTwo = varTwo % 2;
  
  switch(restDivOne){
  case 0:
    console.log("Não é um número ímpar")
  break
  default:
    console.log("É um número ímpar")
  }
  
  switch(restDivTwo){
  case 0:
    console.log("Não é um número ímpar")
  break
  default:
    console.log("É um número ímpar")
  }
}
