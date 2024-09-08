function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    let resultados = "";

    if (!campoPesquisa) {
        section.innerHTML = '<p class="retorno">Nada foi encontrado. Você precisa digitar o nome de uma país africano.</p>'
        return 
    }

    for (let dado of paisesAfricanos) {

        const pais = dado.pais.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        
        if (pais.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.pais}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Email: ${dado.email}</p>
                <p class="descricao-meta">Telefone: ${dado.telefone}</p>
                <a href=${dado.portal} target="_blank">Portal: ${dado.portal}<a>
                </div>`
        }
    };

    if (!resultados) {
        resultados = '<p class="resultado">Nada encontrado</p>'
    };
    
    section.innerHTML = resultados;
};