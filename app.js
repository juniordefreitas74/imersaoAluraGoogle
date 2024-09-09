/**
 * Função para pesquisar vinhos na lista de vinhos e exibir os resultados na página.
 */
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Inicializa variáveis para armazenar os dados do vinho
    let tipo = "";
    let nome = "";
    let descricao = "";
    let harmonizacao = "";
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Exibe uma mensagem se o campo estiver vazio
      section.innerHTML = "<span class='pesquisa-vazia'>Hummm, não encontrei nada com essa busca. <br>Que tal tentar com o nome de um vinho, <br>uma uva ou um prato específico? </span>";
      return;
    }
  
    // Converte o texto do campo de pesquisa para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Itera sobre cada vinho na lista de vinhos
    for (let dado of listaDeVinhos) {
      // Converte os dados do vinho para letras minúsculas para comparação
      tipo = dado.tipo.toLocaleLowerCase();
      nome = dado.nome.toLocaleLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      harmonizacao = dado.harmonizacao.toLocaleLowerCase();
  
      // Verifica se o nome, tipo, descrição ou harmonização do vinho contém o texto pesquisado
      if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || harmonizacao.includes(campoPesquisa)) {
        // Constrói o HTML para cada item da pesquisa, formatando os dados do vinho
        resultados += `
              <div class="item-resultado">
                  <img src="${dado.imagem}" alt="${dado.nome}"> 
                  <h2 href="${dado.link}" target="_blank"> ${dado.nome} </h2> 
                  <p class="descricao-meta"><strong> Tipo: </strong> ${dado.tipo}</p>
                  <p class="descricao-meta"> <strong> Descrição: </strong> ${dado.descricao}</p>
                  <p class="descricao-meta"><strong> Harmonização: </strong> ${dado.harmonizacao}</p>
                  <a href= ${dado.link} target="_blank"> <u><strong><i> Para mais informações, clique aqui! </i></strong></a></u>
              </div>
          `;
      }
  
      console.log(dado.nome.includes(campoPesquisa));
    }
  
    // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
      resultados = "<span style='color:white;'>Nada foi encontrado!</span>";
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }