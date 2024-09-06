function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento selecionado no console para verificação

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        // Constrói o HTML para cada resultado, formatando os dados
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações...</a>
        </div>
        `;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}