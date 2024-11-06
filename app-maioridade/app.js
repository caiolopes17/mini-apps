/**
 * Validação da maioridade
 * @author Caio Lopes
 */

// Função para validação de maioridade
function validar(event) {
    // a linha abaixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()
    // alert("Teste de envio") somente para efetuar teste, pois o alert pode travar o JS
    let nome = document.getElementById('nome').value 
    //alert(nome)
    //console.log(nome)
    console.log(nome)
    let idade = document.getElementByid("idade").value

}