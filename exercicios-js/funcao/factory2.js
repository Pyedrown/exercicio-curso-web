// Meu exercicio

const Produto = function (nome, preco) {
    return {
        nome: nome,
        preco: preco,
    }
}

const produto1 = Produto("Camisa", 35);

const produto2 = Produto("Calça", 90);

console.log(produto1, produto2);

let produtos = [produto1, produto2];

console.log(produtos);

// Aula

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));