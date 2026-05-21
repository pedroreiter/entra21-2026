const cards =
document.getElementById('cards');

const pessoas =
JSON.parse(localStorage.getItem('pessoas')) || [];

function mostrarClientes(){

    cards.innerHTML = '';

    pessoas.forEach((pessoa, index) => {

        cards.innerHTML += `
            <div class="card">
                <h2>${pessoa.nome}</h2>

                <p>
                    <strong>Email:</strong><br>
                    ${pessoa.email}
                </p>

                <p>
                    <strong>Telefone:</strong><br>
                    ${pessoa.telefone}
                </p>

                <p>
                    <strong>CPF:</strong><br>
                    ${pessoa.cpf}
                </p>

                    <button
                        class="visualizar"
                        onclick="visualizar(${index})"
                    >
                        Visualizar
                    </button>

                    <button 
                        class="excluir"
                        onclick="excluir(${index})"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        `;
    });
}

function visualizar(index){

    const pessoa = pessoas[index];

    alert(`
        Nome: ${pessoa.nome}
        Email: ${pessoa.email}
        Telefone: ${pessoa.telefone}
        CPF: ${pessoa.cpf}
        CEP: ${pessoa.cep}
        Rua: ${pessoa.rua}
        Bairro: ${pessoa.bairro}
        Cidade: ${pessoa.cidade}
        Estado: ${pessoa.estado}
        DDD: ${pessoa.ddd}
    `);
}

function excluir(index){
    pessoas.splice(index, 1);

    localStorage.setItem(
        'pessoas',
        JSON.stringify(pessoas)
    );

    mostrarClientes();
}

mostrarClientes();
