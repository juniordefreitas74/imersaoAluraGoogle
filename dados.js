let listaDeVinhos = [
    
        {
            nome: "Carmenere",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com aromas de frutas negras e especiarias.",
            harmonizacao: "Carnes vermelhas, massas robustas",
            link: "https://pt.wikipedia.org/wiki/Carmenere",
            imagem:"imagens/Carmenere.png"
        },
        {
            nome: "Chardonnay",
            tipo: "Branco",
            descricao: "Vinho branco versátil, podendo ser frutado ou amanteigado.",
            harmonizacao: "Frutos do mar, aves, queijos suaves",
            link: "https://pt.wikipedia.org/wiki/Chardonnay",
            imagem:"imagens/Chardonnay.png"
        },
        {
            nome: "Pinot Noir",
            tipo: "Tinto",
            descricao: "Vinho tinto leve com aromas de frutas vermelhas e especiarias.",
            harmonizacao: "Carnes brancas, aves, cogumelos",
            link: "https://pt.wikipedia.org/wiki/Pinot_noir",
            imagem:"imagens/PinotNoir.png"
        },
        {
            nome: "Sauvignon Blanc",
            tipo: "Branco",
            descricao: "Vinho branco fresco com notas cítricas e herbáceas.",
            harmonizacao: "Saladas, frutos do mar",
            link: "https://pt.wikipedia.org/wiki/Sauvignon_blanc",
            imagem:"imagens/Sauvignon Blanc.png"
        },

        //aqui
        {
            nome: "Merlot",
            tipo: "Tinto",
            descricao: "Vinho tinto de corpo médio com aromas de frutas vermelhas e chocolate.",
            harmonizacao: "Carnes vermelhas assadas, massas",
            link: "https://pt.wikipedia.org/wiki/Merlot",
            imagem:"imagens/Merlot.png"
        },
        {
            nome: "Riesling",
            tipo: "Branco",
            descricao: "Vinho branco seco ou doce com aromas florais e minerais.",
            harmonizacao: "Frutos do mar, queijos azuis, sobremesas",
            link: "https://pt.wikipedia.org/wiki/Riesling",
            imagem:"imagens/Riesling.png"
        },
        {
            nome: "Syrah",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com aromas de frutas negras e especiarias.",
            harmonizacao: "Carnes de caça, queijos fortes",
            link: "https://pt.wikipedia.org/wiki/Syrah",
            imagem:"imagens/Syrah.png"
        },
        {
            nome: "Pinot Grigio",
            tipo: "Branco",
            descricao: "Vinho branco leve e refrescante com aromas de maçã e pera.",
            harmonizacao: "Saladas, frutos do mar",
            link: "https://pt.wikipedia.org/wiki/Pinot_gris",
            imagem:"imagens/Pinot Grigio.png"
        },
        {
            nome: "Malbec",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com aromas de frutas negras e ameixa.",
            harmonizacao: "Carnes vermelhas grelhadas, massas",
            link: "https://pt.wikipedia.org/wiki/Malbec",
            imagem:"imagens/Malbec.png"
        },
        {
            nome: "Rosé",
            tipo: "Rosé",
            descricao: "Vinho rosé seco com aromas de frutas vermelhas e flores.",
            harmonizacao: "Saladas, frutos do mar, carnes brancas",
            link: "https://pt.wikipedia.org/wiki/Vinho_ros%C3%A9",
            imagem:"imagens/Rosé.png"
        },
        {
            nome: "Nebbiolo",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com taninos firmes e aromas de rosas e alcaçuz.",
            harmonizacao: "Carnes vermelhas assadas, queijos maturados",
            link: "https://pt.wikipedia.org/wiki/Nebbiolo",
            imagem:"imagens/Nebbiolo.png"
        },
        {
            nome: "Viognier",
            tipo: "Branco",
            descricao: "Vinho branco aromático com notas de pêssego, flores brancas e um toque de especiarias.",
            harmonizacao: "Carnes brancas, frutos do mar, queijos leves",
            link: "https://pt.wikipedia.org/wiki/Viognier",
            imagem:"imagens/Viognier.png"
        },
        {
            nome: "Sangiovese",
            tipo: "Tinto",
            descricao: "Vinho tinto com acidez vibrante e aromas de cereja e especiarias.",
            harmonizacao: "Massas, pizzas, carnes grelhadas",
            link: "https://pt.wikipedia.org/wiki/Sangiovese",
            imagem:"imagens/Sangiovese.png"
        },
        {
            nome: "Gewürztraminer",
            tipo: "Branco",
            descricao: "Vinho branco aromático com notas intensas de lichia, rosas e especiarias.",
            harmonizacao: "Carnes brancas com molhos agridoces, queijos azuis",
            link: "https://pt.wikipedia.org/wiki/Gewurztraminer",
            imagem:"imagens/Gewürztraminer.png"
        },
        {
            nome: "Tempranillo",
            tipo: "Tinto",
            descricao: "Vinho tinto com taninos macios e aromas de frutas vermelhas e especiarias.",
            harmonizacao: "Jamon, queijos curados, carnes assadas",
            link: "https://pt.wikipedia.org/wiki/Tempranillo",
            imagem:"imagens/Tempranillo.png"
        },
        {
            nome: "Grüner Veltliner",
            tipo: "Branco",
            descricao: "Vinho branco com acidez vibrante e aromas de frutas cítricas e pimenta branca.",
            harmonizacao: "Peixes, frutos do mar, saladas",
            link: "https://pt.wikipedia.org/wiki/Gr%C3%BCner_Veltliner",
            imagem:"imagens/Grüner Veltliner.png"
        },
        {
            nome: "Zinfandel",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com aromas de frutas vermelhas, especiarias e um toque defumado.",
            harmonizacao: "Carnes grelhadas, pizzas, massas",
            link: "https://pt.wikipedia.org/wiki/Zinfandel",
            imagem:"imagens/Zinfandel.png"
        },
        {
            nome: "Albariño",
            tipo: "Branco",
            descricao: "Vinho branco mineral com aromas de frutas cítricas e flores brancas.",
            harmonizacao: "Frutos do mar, peixes, saladas",
            link: "https://pt.wikipedia.org/wiki/Albari%C3%B1o",
            imagem:"imagens/Albariño.png"
        },
        {
            nome: "Touriga Nacional",
            tipo: "Tinto",
            descricao: "Vinho tinto encorpado com taninos firmes e aromas de frutas negras, especiarias e chocolate.",
            harmonizacao: "Carnes vermelhas assadas, queijos maturados",
            link: "https://pt.wikipedia.org/wiki/Touriga_Nacional",
            imagem:"imagens/Touriga Nacional.png"
        },
        {
            nome: "Chenin Blanc",
            tipo: "Branco",
            descricao: "Vinho branco versátil, podendo ser seco, doce ou espumante, com aromas de frutas brancas e mel.",
            harmonizacao: "Frutos do mar, carnes brancas, queijos",
            link: "https://pt.wikipedia.org/wiki/Chenin_blanc" ,
            imagem:"imagens/Chenin Blanc.png"
        },


    
  // Novos vinhos:
  
        {
        nome: "Cabernet Sauvignon",
        tipo: "Tinto",
        descricao: "Um dos tintos mais populares do mundo, com estrutura tânica, aromas de frutas negras e capacidade de envelhecimento.",
        harmonizacao: "Carnes vermelhas grelhadas, cordeiro assado, queijos duros.",
        link: "https://pt.wikipedia.org/wiki/Cabernet_Sauvignon",
        imagem:"imagens/Cabernet Sauvignon.png"
        },
        {
        nome: "Chianti Classico",
        tipo: "Tinto",
        descricao: "Vinho tinto italiano com aromas de cereja, especiarias e acidez vibrante.",
        harmonizacao: "Massas com molho de tomate, carnes grelhadas, queijos duros.",
        link: "https://pt.wikipedia.org/wiki/Chianti" ,
        imagem:"imagens/Chianti Classico.png"
        },
        {
        nome: "Châteauneuf-du-Pape",
        tipo: "Tinto",
        descricao: "Vinho tinto encorpado e complexo do sul do Rhône, com potencial de guarda.",
        harmonizacao: "Carnes de caça, cordeiro assado, pratos provençais.",
        link: "https://pt.wikipedia.org/wiki/Ch%C3%A2teauneuf-du-Pape",
        imagem:"imagens/Châteauneuf-du-Pape.png"
        },
        {
        nome: "Barolo",
        tipo: "Tinto",
        descricao: "Vinho tinto italiano com taninos firmes, aromas de rosas e alcaçuz e potencial de envelhecimento.",
        harmonizacao: "Carnes vermelhas assadas, trufas, queijos maturados.",
        link: "https://pt.wikipedia.org/wiki/Barolo_(vinho)",
        imagem:"imagens/Barolo.png"
        },
        {
        nome: "Rioja",
        tipo: "Tinto",
        descricao: "Vinho tinto espanhol com aromas de frutas vermelhas, especiarias e baunilha.",
        harmonizacao: "Churrasco, cordeiro assado, tapas espanholas.",
        link: "https://pt.wikipedia.org/wiki/Rioja_(vinho)",
        imagem:"imagens/Rioja.png"
        },
        {
        nome: "Chablis",
        tipo: "Branco",
        descricao: "Vinho branco com mineralidade, acidez e aromas cítricos.",
        harmonizacao: "Ostras, frutos do mar, peixes grelhados.",
        link: "https://pt.wikipedia.org/wiki/Chablis_(vinho)",
        imagem:"imagens/Chablis.png"
        },
        {
        nome: "Sancerre",
        tipo: "Branco",
        descricao: "Vinho branco com aromas de frutas cítricas, ervas e mineralidade.",
        harmonizacao: "Saladas, queijos de cabra, frutos do mar.",
        link: "https://pt.wikipedia.org/wiki/Sancerre_(AOC)",
        imagem:"imagens/Sancerre.png"
        },
        {
        nome: "Vinho Verde",
        tipo: "Branco",
        descricao: "Vinho branco leve e refrescante com acidez e ligeira efervescência.",
        harmonizacao: "Peixes grelhados, saladas, aperitivos.",
        link: "https://pt.wikipedia.org/wiki/Vinho_Verde",
        imagem:"imagens/VinhoVerde.png"
        },
        {
        nome: "Torrontés",
        tipo: "Branco",
        descricao: "Vinho branco aromático com aromas de flores brancas, frutas cítricas e especiarias.",
        harmonizacao: "Comida asiática, pratos picantes, queijos frescos.",
        link: "https://pt.wikipedia.org/wiki/Torront%C3%A9s",
        imagem:"imagens/Torrontés.png"
        },
        {
        nome: "Sauternes",
        tipo: "Branco Doce",
        descricao: "Vinho branco doce com aromas de mel, damasco e especiarias.",
        harmonizacao: "Foie gras, queijos azuis, sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Sauternes_(vinho)",
        imagem:"imagens/Sauternes.png"
        },
        {
        nome: "Champagne",
        tipo: "Espumante",
        descricao: "Espumante produzido pelo método tradicional, com aromas complexos e acidez vibrante.",
        harmonizacao: "Ostras, canapés, celebrações.",
        link: "https://pt.wikipedia.org/wiki/Champanhe",
        imagem:"imagens/Champagne.png"
        },
        {
        nome: "Prosecco",
        tipo: "Espumante",
        descricao: "Espumante italiano leve e fresco, com aromas frutados e florais.",
        harmonizacao: "Aperitivos, brunch, sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Prosecco",
        imagem: "imagens/Prosecco.png" ,


        
        },
        {
        nome: "Cava",
        tipo: "Espumante",
        descricao: "Espumante espanhol feito pelo método tradicional, uma alternativa ao Champagne.",
        harmonizacao: "Tapas, frutos do mar, paella.",
        link: "https://pt.wikipedia.org/wiki/Cava_(vinho)",
        imagem:"imagens/Cava.png"
        },
        {
        nome: "Porto",
        tipo: "Fortificado",
        descricao: "Vinho fortificado português com diferentes estilos, como Ruby, Tawny e Vintage.",
        harmonizacao: "Queijos, chocolate amargo, sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Vinho_do_Porto",
        imagem:"imagens/Porto.png"
        },
        {
        nome: "Jerez",
        tipo: "Fortificado",
        descricao: "Vinho fortificado espanhol com diferentes estilos, como Fino, Manzanilla e Oloroso.",
        harmonizacao: "Tapas, frutos do mar, sopas frias.",
        link: "https://pt.wikipedia.org/wiki/Jerez_(vinho)",
        imagem:"imagens/Jerez.png"
        },
        {
        nome: "Madeira",
        tipo: "Fortificado",
        descricao: "Vinho fortificado com complexidade e capacidade de envelhecimento.",
        harmonizacao: "Queijos, sobremesas, charutos.",
        link: "https://pt.wikipedia.org/wiki/Vinho_Madeira",
        imagem:"imagens/Madeira.png"
        },

    
    

    ];