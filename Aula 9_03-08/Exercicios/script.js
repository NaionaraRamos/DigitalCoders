function checarCampos(){
    if((document.getElementById('nome').value == '')
    ||(document.getElementById('email').value == '')
    ||(document.getElementById('senha').value == '')
    ||(document.getElementById('repetirSenha').value == '')){
        alert('Todos os campos precisam estar preenchidos.');
    }
}


function checar_senha(){
    if(document.getElementById('senha').value != document.getElementById('repetirSenha').value){
        alert('As senhas não conferem.')
    }
}