function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento selecionado no console para verificação

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if(!campoPesquisa){
        section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = '';
    let descricao = '';
    let tags = '';

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
        // se o titulo inclui o campo de pesquisa        
            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                // cria um novo elemento
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
    }

    if (!resultados) {
        resultados = `<p>Nada foi encontrado</p>`
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}