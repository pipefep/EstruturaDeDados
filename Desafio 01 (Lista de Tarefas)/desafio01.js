var totItem = 0;

function criar(){

    totItem++; // Contador para administrar as multiplas IDs


    // --- ESCREVER O ITEM ---

    // Receber os dados e armazenar
    var texto = document.getElementById("digitar").value;  // armazenar o que o usuario digitou
    var cont = document.createTextNode(texto); // cria um texto com o valor da var de cima

    // Criar elementos (Span e Li)
    var spn = document.createElement("span");
    var novoElemento = document.createElement("li");

    // Adicionar ID e Class para os elementos (ID e Class para cada elemento criado)
    spn.id = "spnId" + totItem;
    novoElemento.id = "liId" + totItem;
    novoElemento.className = "textoDesign"; // class para facilitar no css

    // Aninhar os elementos
    spn.appendChild(cont); // coloca o texto digitado de cont no span
    novoElemento.appendChild(spn); // coloca o span na li
    document.getElementById("itens").appendChild(novoElemento); // acrescenta a li na ol cujo id="itens"
    
    // Armazena o texto digitado pelo usuário/pega direto do valor
    spn.innerText = texto;

    // --- CHECK NO ITEM ---

    // Cria Input do tipo Checkbox
    var feito = document.createElement("input");
    feito.type = "checkbox";

    // Coloca ID em todo elemento com Checkbox
    feito.id = "feitoId" + totItem;

    // Class para o CSS
    feito.className = "feitoDesign";
    
    // Coloca a checkbox na Li
    novoElemento.appendChild(feito);

    // Efeito de marcar e desmarcar a tarefa
    feito.onclick = function(){
        var marcarId = feito.id.replace("feitoId", ""); //substitui o feitoId por "" para ter só os numeros
        var marcarTexto = document.getElementById("liId" + marcarId); //receber o id da Li com o numero/posição da checkbox

        if(feito.checked == true){ //Se estiver marcado
            marcarTexto.style.textDecoration =  "line-through";
            marcarTexto.style.fontStyle = "italic";
        }
        else{ //se estiver desmarcado
            marcarTexto.style.textDecoration =  "none";
            marcarTexto.style.fontStyle = "normal";
        }      
    };


    // --- EXCLUIR ITEM ---

    // Cria Input do tipo Botão
    var deletar = document.createElement("input");
    deletar.type = "button";

    // Adiciona um texto dentro do botão
    deletar.value = "Remover";

    // Coloca ID em todo elemento do botão remover
    deletar.id = "del" + totItem;

    // Class para o CSS
    deletar.className = "deleteDesign";

    // Coloca o botão na Li
    novoElemento.appendChild(deletar);

    // Efeito de excluir/esconder a tarefa
    deletar.onclick = function(){
        var excId = deletar.id.replace("del", "");
        document.getElementById("liId"+excId).style.display = "none"; //pega a tarefa da li com tal id e esconde 
    };


    // --- RENOMEAR ITEM ---

    // Cria Input do tipo Botão 
    var renomear = document.createElement("input");
    renomear.type = "button";

    // Adiciona um texto dentro do botão
    renomear.value = "Editar";

    // Coloca ID em todo elemento do botão editar
    renomear.id = "ren" + totItem;

    // Class para o CSS
    renomear.className = "renomearDesign";

    // Coloca o botão na Li
    novoElemento.appendChild(renomear);

    // Função para renomear o texto dentro da Li
    renomear.onclick = function(){  
        novoNome = prompt("Digite o novo Item"); // Abre uma caixa para digitar a nova tarefa
        spn.innerText = novoNome; // Substitui o texto digitado pelo usuário lá em cima
    };

}