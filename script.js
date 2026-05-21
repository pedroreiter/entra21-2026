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
    const cep =
    document.getElementById('cep').value;
    const rua =
    document.getElementById('rua').value;
    const bairro =
    document.getElementById('bairro').value;
    const estado =
    document.getElementById('estado').value;
    const ddd =
    document.getElementById('ddd').value;
    const localidade =
    document.getElementById('localidade').value;





    // VALIDAÇÃO
    if(nome === '' || email === '' || telefone === '' || cpf === ''  || cep === ''){
        alert('Preencha todos os campos!');
        return;
    }

    const pessoa = {
        nome,
        email,
        telefone,
        cpf,
        cep,
        rua,
        bairro,
        regiao,
        estado,
        ddd,
        localidade
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
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('regiao').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('ddd').value = '';
    document.getElementById('localidade').value = ''; 
}

function buscarLogradouro(){
            const cep = document.getElementById('cep')
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(dados => dados.json())
            .then(resposta => {console.log(resposta)
                document.getElementById('rua').value = resposta.logradouro
                document.getElementById('bairro').value = resposta.bairro
                document.getElementById('regiao').value = resposta.regiao
                document.getElementById('estado').value = resposta.estado
                document.getElementById('ddd').value = resposta.ddd
                document.getElementById('localidade').value = resposta.localidade
             })
        }
