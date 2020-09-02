function validar() {

	var nome = formSignUp.nome.value;
	var email = formSignUp.email.value;
	var senha = formSignUp.senha.value;
	var confirm_senha = formSignUp.confirm_senha.value;
	console.log(nome);

	var usuario = document.getElementById('nomeUsuario').value;
	console.log(usuario);

	if (nome === '') {

		formSignUp.nome.value = 'Faltou o nome.';

		msgErro.innerHTML = 'Nome é obrigatório';

		formSignUp.nome.focus();
		return false;
	}

	if (email === '') {

		msgErro.innerHTML = 'E-mail é obrigatório';
		formSignUp.email.focus();
		return false;
	}

	if (senha === '') {

		msgErro.innerHTML = 'Senha é obrigatório';
		formSignUp.senha.focus();
		return false;
	}

	if (confirm_senha === '') {

		msgErro.innerHTML = 'ConfirmSenha é obrigatório';
		formSignUp.confirm_senha.focus();
		return false;
	}
} 