class Usuario {
  constructor(email, senha){
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin(){
    return this.admin ? true : false;
  }
}

class Admin extends Usuario{
  constructor(){
    super();
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade);
console.log(idades);

const funcionario = usuarios.filter(value => value.empresa === 'Rocketseat' &&
  value.idade > 17 );

console.log(funcionario);

const funcionarioGoogle = usuarios.find(funcionario => funcionario.empresa === 'Google');
console.log(funcionarioGoogle);

const idadeCinquenta = usuarios.filter(funcionario => (funcionario.idade * 2) < 51);

console.log(idadeCinquenta);

const arr = [1, 2, 3, 4, 5];
const arrMaisDez = arr.map(item => item + 10);
console.log(arrMaisDez);

const usuarioT = { nome: 'Diego', idade: 23 };
const mostraIdade = (user) => (user.idade);
//console.log(mostraIdade(usuarioT));

const name = "Diego";
const age = 23;

const mostraUsuario = (name = 'Diego', age = 18) => [name, age];
console.log(mostraUsuario(name, age));
console.log(mostraUsuario(name));

const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise);

//Desestruturacao
const empresa = {  
  nome: 'Rocketseat',
  endereco: {    
    cidade: 'Rio do Sul',
    estado: 'SC',  }
};

const { nome, endereco: {cidade}, endereco: {estado} } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

const arrNumeros = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arrNumeros;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params){
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);

const usuario3 = { ...usuario, endereco:{cidade: 'Lontras', uf: 'SC',
 pais: 'Brasil',}};
console.log(usuario3);

const newUser = 'Diego';
const newAge = 23;
console.log(`O usuário ${newUser} possui ${newAge} anos`);

const oldName = 'Diego';
const oldAge = 23;
const oldUser = {
  oldName,
  oldAge,
  cidade: 'Rio do Sul',
};

console.log(oldUser);

