const botao =
document.getElementById('cadastrar');

const botaoLimpar =
document.getElementById('limpar');

botao.addEventListener('click', () => {

    const nome =
    document.getElementById('nome').value;

    const email =
    document.getElementById('email').value;

    const telefone =
    document.getElementById('telefone').value;

    const cpf =
    document.getElementById('cpf').value;

    // VALIDAÇÃO
    if(nome === '' || email === '' || telefone === '' || cpf === ''){
        alert('Preencha todos os campos!');
        return;
    }

    const pessoa = {
        nome,
        email,
        telefone,
        cpf
    };

    // PEGA DADOS SALVOS
    const pessoas =
    JSON.parse(localStorage.getItem('pessoas')) || [];

    // ADICIONA NOVA PESSOA
    pessoas.push(pessoa);

    // SALVA NO NAVEGADOR
    localStorage.setItem(
        'pessoas',
        JSON.stringify(pessoas)
    );

    alert('Cliente cadastrado!');

    limparCampos();
});

// LIMPAR
botaoLimpar.addEventListener('click', () => {
    limparCampos();
});

// FUNÇÃO
function limparCampos(){

    document.getElementById('nome').value = '';

    document.getElementById('email').value = '';

    document.getElementById('telefone').value = '';

    document.getElementById('cpf').value = '';
}