"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}(); //Herança


var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  //Sempre será o primeiro a ser executado, analogo a outras linguagens

  /*constructor(){
    this.todos = [];
  }
   //Método
  addTodo(){
    this.todos.push('Novo todo');
    console.log(this.todos);
  }*/
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    //chamando constructor da classe pai
    _this = _super.call(this);
    _this.usuario = 'Willian';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List); //Criando objeto da classe


var MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); //Métodos estaticos nao enchergam e nao dependem nada que esteja fora dela,
//por está razao nem ao menos se usa constructor

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); //constantes

var usuario = {
  nome: 'Willian'
}; //Mutação, isso é diferente de uma reatribuicao const a = 1; a = 2; error

usuario.nome = 'Feio'; //Variáveis de escopo

function teste(x) {
  //variavel de escopo
  var y = 2;

  if (x > 5) {
    y = 3;
    console.log(x, y);
  }
}

teste(10); //Vetores

var arr = [1, 2, 3, 4, 5]; //map percorre o vetor e realiza alguma acao. recebe como parametro item e index

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduz vetor a uma única informacao

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Filtra o vetor

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //verificar valor dentro do array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //Arrow function 
//Callback: passagem de funcao para funcao

var arrArrowFunction = arr.map(function (item) {
  return item * 2;
});
console.log('Arrow: ' + arrArrowFunction);

var aqui = function aqui() {
  return {
    nome: "Will"
  };
};

console.log(aqui()); //Valores padroes

var novaSoma = function novaSoma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(novaSoma(1));
