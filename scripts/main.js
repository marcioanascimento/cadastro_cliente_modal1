
var capturandoNome = "";
var capturandoSobrenome = "";
var capturandoTelefone = "";
var capturandoCep = "";
var capturandoLogradouro = "";
var capturandoBairro = "";
var capturandoComplemento = "";
var capturandoLocalidade = "";
var capturandoUf = "";


function adicionar() { //a variável criada é colocada junto ao id que será capturado com o valor

    capturandoNome = document.getElementById("nome").value;
    capturandoSobrenome = document.getElementById("sobrenome").value;
    capturandoTelefone = document.getElementById("telefone").value;
    capturandoCep = document.getElementById("cep").value;
    capturandoLogradouro = document.getElementById("logradouro").value;
    capturandoBairro = document.getElementById("bairro").value;
    capturandoComplemento = document.getElementById("complemento").value;
    capturandoLocalidade = document.getElementById("localidade").value;
    capturandoUf = document.getElementById("uf").value;

    //aqui o valo... é o id do campo que receberá (innerHTML) o input da function adicionar
    document.getElementById( 'valorNome',' valorSobrenome' ).innerHTML = capturandoNome+' '+capturandoSobrenome;
    document.getElementById( 'valorTelefone' ).innerHTML = 'Telefone: ' + ' ' + capturandoTelefone; 
    document.getElementById( 'valorCep' ).innerHTML = 'CEP: ' + ' ' + capturandoCep; 
    document.getElementById( 'valorLogradouro' ).innerHTML = 'Endereço: ' + ' ' + capturandoLogradouro; 
    document.getElementById( 'valorBairro' ).innerHTML = 'Bairro: ' + ' ' + capturandoBairro; 
    document.getElementById( 'valorComplemento' ).innerHTML = 'Complemento: ' + ' ' + capturandoComplemento;
    document.getElementById( 'valorLocalidade' ).innerHTML = 'Cidade: ' + ' ' + capturandoLocalidade;
    document.getElementById( 'valorUf' ).innerHTML = 'UF: ' + ' ' + capturandoUf;
   
}


//busca do CEP
const cep = document.querySelector("#cep")

const showData = (result) =>{
    for(const campo in result) //para cada resultado, guarde o valor na constante campo.
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
}

cep.addEventListener("blur", ()=>{

    let search = cep.value.replace("-","")
    const options = {
        method : 'GET',
        mode : 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
        .then(data => showData(data)) 
    }) // se der certo...
    .catch(e => console.log('Deu erro: ' + e,message)) // se der errado...
})

function limparCampos(){
    document.getElementById("formApp").reset();
}