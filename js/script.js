let nome = document.querySelector("#nome")

nome.addEventListener("blur", ()=>{
    if(nome.value == ""){
        nome.classList.add("border-danger")
        nome.classList.remove("border-success")
    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border-success")
    }
})

let email = document.querySelector("#email")
let conf = document.querySelector("#confirmar")

email.addEventListener("keyup", ()=>{
    let minus = email.value.toLowerCase()
    conf.value = email.value

    if(minus.indexOf('@') == -1 || minus.indexOf('.com') == -1){
        console.log("Email Invalido")
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Email Valido")
        email.classList.remove("border-danger")
        email.classList.add("border-success")
    }
})

let cartao = document.querySelector("#cartao")

cartao.addEventListener("blur", ()=>{
    if(cartao.value == ""){
        cartao.classList.add("border-danger")
        cartao.classList.remove("border-success")
    }
    else{
        cartao.classList.remove("border-danger")
        cartao.classList.add("border-success")
    }
})

let numcard = document.querySelector("#numcartao")

numcard.addEventListener("blur", ()=>{
    if(numcard.value == ""){
        numcard.classList.add("border-danger")
        numcard.classList.remove("border-success")
    }
    else{
        numcard.classList.remove("border-danger")
        numcard.classList.add("border-success")
    }
})

cvv.addEventListener("blur", ()=>{
    if(cvv.value == ""){
        cvv.classList.add("border-danger")
        cvv.classList.remove("border-success")
    }
    else{
        cvv.classList.remove("border-danger")
        cvv.classList.add("border-success")
    }
})


let mensagem = document.querySelector("#men")
let restante = document.querySelector("#rest")

let limite = 150
mensagem.addEventListener("keyup", ()=>{
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    console.log(restante.parentNode)

    if(restante.textContent == 150){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red"
    }
    else{
        mensagem.classList.remove("border-danger")
        restante.parentNode.style.color = "black"
    }

    mensagem.setAttribute("maxlength", limite)
})