class TodoList {
  //Sempre será o primeiro a ser executado, analogo a outras linguagens
  constructor(){
    this.todos = [];
  }

  //Método
  addTodo(){
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

//Criando objeto da classe
const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
  MinhaLista.addTodo();
}