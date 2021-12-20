import userLogin from "./moduloDados";
import controllerUserLogin from "./moduloInterface";
debugger;
var myModal = new bootstrap.Modal(document.getElementById('myModal'));

//Trazendos os botões da DOM em HTML.
//Preciso e inserir no index.html...os IDs/divs colocados no index.html que criam os botões abaixo..
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=> {
    let nome = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    //Testando se os campos não estão vazios.
    if(!nome || nome==null || nome ==="" || !senha || senha===null || senha===""){
        alert("Campos vazios, não há como executar o userLogin.");
        
        myModal.show();
    }else{ 
        controllerUserLogin.loginInfo(nome, senha);
    }

})