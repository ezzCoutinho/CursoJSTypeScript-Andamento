/* eslint-disable @typescript-eslint/no-namespace */
// modulo é um namespace;
// ele não precisa ser executado;
// cria qualquer coisa dentro dele
// ele tem o seu escopo protegido (closure), podendo export,
// usando anotação de ponto "Namespace.Pessoa"
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nome = 'Luiz';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace(MeuNamespace.nome);
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.sobrenome = 'Otávio';
        var PessoaOutroNamespace = /** @class */ (function () {
            function PessoaOutroNamespace(nome, sobrenome) {
                this.nome = nome;
                this.sobrenome = sobrenome;
            }
            PessoaOutroNamespace.prototype.nomeCompleto = function () {
                return "".concat(this.nome, " ").concat(this.sobrenome);
            };
            return PessoaOutroNamespace;
        }());
        OutroNamespace.PessoaOutroNamespace = PessoaOutroNamespace;
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
    MeuNamespace.pessoa2 = new OutroNamespace.PessoaOutroNamespace(MeuNamespace.nome, OutroNamespace.sobrenome);
})(MeuNamespace || (MeuNamespace = {}));
var nome = MeuNamespace.nome;
var pessoa = new MeuNamespace.PessoaDoNamespace(nome);
console.log(pessoa);
var pessoa2 = MeuNamespace.pessoa2;
console.log(pessoa2.nomeCompleto());
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace.nome);
