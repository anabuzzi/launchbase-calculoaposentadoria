const nome = "Maria";
const sexo = "F";
const idade = 60;
const contribuicao = 35;

const calculoContribuicao = idade + contribuicao


const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >=30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {

    console.log(`${nome}, você já pode se aposentar!`)

    }else{

console.log(`${nome}, você ainda não pode se aposentar!`)

}
