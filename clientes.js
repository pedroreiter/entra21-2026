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

function excluir(index){
    pessoas.splice(index, 1);

    localStorage.setItem(
        'pessoas',
        JSON.stringify(pessoas)
    );

    mostrarClientes();
}

mostrarClientes();