class Acertijo {
    constructor (consigna, resolucion) {
        this.consigna = consigna
        this.resolucion = resolucion
    }
}

const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 

    if (inputValue=="" || inputValue == null) {
        document.getElementById("valueInput").innerHTML = "Debes completar tu nombre para poder continuar"
    } 
    else {
    document.getElementById("valueInput").innerHTML = "Al fin " + inputValue + " te hemos encontrado! te estabamos buscando. Espero que sepas a lo que nos encontramos. Mientras tanto no tenemos mucho tiempo, agarra papel y lapiz. ¡Vamos!"
    primerAcertijo()
    }
  }

  let consignaUno = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'" 
    
    let resolucionUno = ["exterior", "escrito", "estrellas"]

    const acertijoUno = new Acertijo (consignaUno, resolucionUno)

  function primerAcertijo(){

    let botones = document.getElementById("botones")
    
    document.getElementById("primerAcertijo").innerHTML = acertijoUno.consigna
    botones.style.display = 'block'
  }

  function valueTresPalabras() {
    
        let inputsValues = document.getElementsByClassName("tresPalabras");
    
        if (inputsValues.length>0 && ValidacionTresPalabras(inputsValues, resolucionUno)) {
            let validacionTresPalabras = document.getElementById("validacionTresPalabras ")
        
            validacionTresPalabras.style.display = 'none'
            segundoAcertijo()
        } 
        else {
            document.getElementById("pifiaste").innerHTML = "Tus palabras no son las correctas"
        }
            
    }
    
    //cada elemento del array resolucionUsuario debe ser igual que los elementos de resolucionUno sin importar su orden
    function ValidacionTresPalabras (resolucionUsuario, resolucionUno) {
    
        let flag = false
        console.log(resolucionUno)
        for (let palabra of resolucionUsuario) {
            if (resolucionUno.includes(palabra.value)) {
                flag = true
            }
            else {
                return false
            }
        }
        return flag
    }

    let consignaDos = "Exterior, escrito, estrellas... ¿Qué nos querrán decir? Ah! Todavía no te he contado... Se viene algo muy grande y debemos estar listos. ¡Espera! '7548L932U97268Z' esto dice al final. Ves algunas letras?"
    
    let respuestaDos = "LUZ"

    const acertijoDos = new Acertijo (consignaDos, respuestaDos)

    function segundoAcertijo() {
        let textoDos = document.getElementById("segundoAcertijo")
        
        textoDos.style.display = 'block'

        document.getElementById("textoAcertijoDos").innerHTML = consignaDos
    }
    
    function validacionDos (){
        let respuestaUsuario = document.getElementById("luz").value

        if (respuestaUsuario.toUpperCase()==="LUZ") {
document.getElementById("textoDos").innerHTML = "Excelente. Si quieres salvarte, deberás demostrar tu valentía ¿Estás preparado? Continuará"
        }
        else {
            document.getElementById("textoDos").innerHTML = "vuelve a intentarlo"
        }
    }
// saludo()

// function saludo() {

//     let nombre = prompt("Hola! queremos darte la bienvenida a esta nueva aventura. Por favor, escribe tu nombre.")

//     if (nombre=="" || nombre==null) {
//         alert("Ups! Parece que no ha completado su nombre")
//         saludo()
//     }
//     else {
//         let bienvenida = prompt("Al fin " + nombre + " te hemos encontrado! te estabamos buscando. Sabes a lo que nos enfrentamos si, o no?")
//         let resultado = primerAcertijo(bienvenida)

//         while (resultado === false) {
//             alert ("Parece que no son las palabras correctas")
//             resultado = primerAcertijo (bienvenida)        }

//         let resultadoDos = segundoAcertijo()

//         
    
            
//         }            
//     }

// function primerAcertijo(bienvenida) {
    
//     let consignaUno = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'"

//     let resolucionUno = ["exterior", "escrito", "estrellas"]

//     const acertijoUno = new Acertijo (consignaUno, resolucionUno)

//     alert(acertijoUno.consigna)
//     return tresPalabras(acertijoUno.resolucion) 
// }

// 


