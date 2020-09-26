class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//Herança
class TodoList extends List {
  //Sempre será o primeiro a ser executado, analogo a outras linguagens
  /*constructor(){
    this.todos = [];
  }

  //Método
  addTodo(){
    this.todos.push('Novo todo');
    console.log(this.todos);
  }*/

  constructor(){
    //chamando constructor da classe pai
    super();
    this.usuario = 'Willian';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

//Criando objeto da classe
const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

//Métodos estaticos nao enchergam e nao dependem nada que esteja fora dela,
//por está razao nem ao menos se usa constructor
class Matematica {
  static soma(a, b){
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

//constantes
const usuario = { nome: 'Willian'};
//Mutação, isso é diferente de uma reatribuicao const a = 1; a = 2; error
usuario.nome = 'Feio';

//Variáveis de escopo
function teste(x) {
  //variavel de escopo
  let y = 2;

  if (x > 5) {
    y = 3;
    console.log(x, y);
  }
}

teste(10);

//Vetores
const arr = [1, 2, 3, 4, 5];

//map percorre o vetor e realiza alguma acao. recebe como parametro item e index
const newArr = arr.map(function(item, index){
  return item + index;
});

console.log(newArr);

//Reduz vetor a uma única informacao
const sum = arr.reduce(function(total, next){
  return total + next;
});

console.log(sum);

//Filtra o vetor
const filter = arr.filter(function(item){
  return item % 2 === 0;
})

console.log(filter);

//verificar valor dentro do array
const find = arr.find(function(item){
  return item === 4;
});

console.log(find);

//Arrow function 
//Callback: passagem de funcao para funcao
const arrArrowFunction = arr.map(item => item * 2);
console.log('Arrow: ' + arrArrowFunction);

const aqui = () => ({nome : "Will"});

console.log(aqui());

//Valores padroes

const novaSoma = (a = 3, b = 6) => a + b;

console.log(novaSoma(1));

//desestruturacao
const will = {
  nome: 'Willian',
  idade: 27,
  endereco :{
    cidade: 'Brasília',
    estado: 'DF'
  }
};

const { nome, idade, endereco: { cidade }} = will;
console.log(nome);
console.log(idade);
console.log(cidade);

//desestruturacao em parametros de funcoes
function mostraNome({ nome, idade }){
  console.log(nome, idade);
}

mostraNome(will);

//REST
const user = {
  name: 'Will',
  idade: 27,
  empresa: 'xxx'
};

const { name, ...resto} = user;

console.log(name);
console.log(resto);

//REST em vetores
const myArr = [1, 2, 3, 4];

const [ a, b, ...c] = myArr;

console.log(a);
console.log(b);
console.log(c);

//rest como parametro de funcao
function somaRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Willian'};

console.log(usuario2);

//template literals
const nameWill = "Willian";
const ageWill = 27;

console.log(`Meu nome é ${nameWill} e tenho ${ageWill} anos`);