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
