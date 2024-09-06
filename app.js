function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let tipo = "";
    let nome = "";
    let descricao = "";
    let harmonizacao = "";


    if(!campoPesquisa){
        section.innerHTML = "<span style='color:white;'>Hummm, não encontrei nada com essa busca. <br>Que tal tentar com o nome de um vinho, <br>uma uva ou um prato específico? </span>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase() // transforma tudo que for digitado em minusculo

    // Itera sobre cada vinho na lista de vinhos
    for (let dado of listaDeVinhos) {
        
        tipo = dado.tipo.toLocaleLowerCase()
        nome = dado.nome.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        harmonizacao = dado.harmonizacao.toLocaleLowerCase()
        
        // se dado.nome.includes for igual ao campoPesquisa, então faça
        if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || harmonizacao.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                
                <h2><a href="#" target="_blank"> ${dado.nome} </a></h2> 
                
                <p class="descricao-meta"><strong> Tipo: </strong> ${dado.tipo}</p>
                <p class="descricao-meta"> <strong> Descrição: </strong> ${dado.descricao}</p>
                <p class="descricao-meta"><strong> Harmonização: </strong> ${dado.harmonizacao}</p>
                
                <a href= ${dado.link} target="_blank"> <u><strong><i> Mais Informações </i></strong></a></u>
            </div>
        `;

        }
        console.log(dado.nome.includes(campoPesquisa))
        // Constrói o HTML para cada item da pesquisa, formatando os dados do vinho
        
    }

    if (!resultados){
        resultados = "<span style='color:white;'>Nada foi encontrado!</span>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}