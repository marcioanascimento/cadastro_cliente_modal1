
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

    capturandoNome = document.querySelector("#nome").value;
    capturandoSobrenome = document.querySelector("#sobrenome").value;
    capturandoTelefone = document.querySelector("#telefone").value;
    capturandoCep = document.querySelector("#cep").value;
    capturandoLogradouro = document.querySelector("#logradouro").value;
    capturandoBairro = document.querySelector("#bairro").value;
    capturandoComplemento = document.querySelector("#complemento").value;
    capturandoLocalidade = document.querySelector("#localidade").value;
    capturandoUf = document.querySelector("#uf").value;

    //aqui o valor... é o id do campo que receberá (innerHTML) o input da function adicionar
    document.querySelector( '#valorNome',' #valorSobrenome' ).innerHTML = capturandoNome+' '+capturandoSobrenome;
    document.querySelector( '#valorTelefone' ).innerHTML = 'Telefone: ' + ' ' + capturandoTelefone; 
    document.querySelector( '#valorCep' ).innerHTML = 'CEP: ' + ' ' + capturandoCep; 
    document.querySelector( '#valorLogradouro' ).innerHTML = 'Endereço: ' + ' ' + capturandoLogradouro; 
    document.querySelector( '#valorBairro' ).innerHTML = 'Bairro: ' + ' ' + capturandoBairro; 
    document.querySelector( '#valorComplemento' ).innerHTML = 'Complemento: ' + ' ' + capturandoComplemento;
    document.querySelector( '#valorLocalidade' ).innerHTML = 'Cidade: ' + ' ' + capturandoLocalidade;
    document.querySelector( '#valorUf' ).innerHTML = 'UF: ' + ' ' + capturandoUf;
   
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