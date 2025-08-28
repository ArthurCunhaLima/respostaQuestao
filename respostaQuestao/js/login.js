let user = "admin";
let senha = 123;

function checkLogin(){
    userLogin = document.getElementById("userLogin").value;
    userSenha = document.getElementById("userSenha").value;
    if (user == userLogin && senha == userSenha){
        alert("Acesso Bem-Sucedido")
    }else {
        alert("Acesso Negado")
    }
}