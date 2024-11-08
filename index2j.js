//Wellington dos Santos Almeida
function aplicarDesconto(preco) {
    return preco * 0.90; 
}


function calcularParcelasSemJuros(preco, numParcelas) {
    return preco / numParcelas;
}


function calcularParcelasComJuros(preco, numParcelas) {
    let precoComJuros = preco * 1.02;  
    return precoComJuros / numParcelas;
}


function calcularCompra(produto, numParcelas) {
    const precoProduto = produto.preco;

    
    if (numParcelas === 0) {
        let valorComDesconto = aplicarDesconto(precoProduto);
        console.log(`Compra à vista! Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    } 
    
    else if (numParcelas >= 1 && numParcelas <= 10) {
        let valorParcelado = calcularParcelasSemJuros(precoProduto, numParcelas);
        console.log(`Compra parcelada em ${numParcelas} vezes! Valor de cada parcela: R$ ${valorParcelado.toFixed(2)}`);
    } 
    
    else if (numParcelas >= 11 && numParcelas <= 12) {
        let valorParceladoComJuros = calcularParcelasComJuros(precoProduto, numParcelas);
        console.log(`Compra parcelada em ${numParcelas} vezes com 2% de juros! Valor de cada parcela: R$ ${valorParceladoComJuros.toFixed(2)}`);
    } 
    
    else {
        console.log("Número de parcelas não permitido. O máximo é 12 parcelas.");
    }
}


let produto = { nome: "Smartphone", preco: 1000.00 };

calcularCompra(produto, 0);  
calcularCompra(produto, 5);  
calcularCompra(produto, 11); 
calcularCompra(produto, 13);
