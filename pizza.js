const BOTON = document.querySelector("button")
const BODY = document.querySelector("body")
const EXADECIMAL = document.getElementById("nombreColores")
console.log("hola")

BOTON.addEventListener("click", clickeoBoton)





function clickeoBoton() {
    hexadecimal() 

    function hexadecimal(){
        
        console.log("funciona")
        let digitos = "0123456789ABCDEF";
        let signo = "#"
    
        for (let index = 0; index < 6; index++) {
            let colorHexa = Math.floor(Math.random() * 16)
            signo +=  digitos[colorHexa]
        BODY.style.backgroundColor = signo
        EXADECIMAL.innerText = signo

        }
        return signo
    }
}