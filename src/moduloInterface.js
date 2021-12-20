import userLogin from "./moduloDados";

class ControllerUserLogin{
    constructor(status){
        this.status=status;
    }
    checkLoginInfo(){
        this.status=true;
    }
    loginInfo(user, senha){
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
            if(infoCheck.senha === senha) {
                alert("Logou");
                this.checkLoginInfo();
            }else {
                if(!infoCheck){
                    alert("Usuário não existe.")
                }else { 
                alert("Não log");

            }
    }
}

}

const controllerUserLogin = new ControllerUserLogin()
export default controllerUserLogin;