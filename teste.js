var botaoAdicionar = document.querySelector("#logar");

botaoAdicionar.addEventListener("click", function(event) {

   var campoUsuario = document.getElementById('usuario').value;
   var campoSenha = document.getElementById('senha').value;
          
   if (campoUsuario == "teste@hotmail.com" && campoSenha == "123") 
       window.location.href="menu.html";
   else
       alert("Dados incorretos! Por favor, tente novamente.");     
});