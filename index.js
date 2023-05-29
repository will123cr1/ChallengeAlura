function encriptar(){
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let texto = document.getElementById("texto").value;
    let nino = document.getElementById("nino");
    parrafo = document.getElementById("parrafo");


    let cifrarTexto = texto
   
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

 if(texto.length != 0){
    document.getElementById("texto").value = cifrarTexto;
    tituloMensaje.textContent = "Su mensaje a sido excriptado con exito";
    parrafo.textContent = "";
    nino.src = "./imagenes/newidea.png";
 } else {
    nino.src = "./Imagenes/pensar.jpg";
    tituloMensaje.textContent = "No se encontro ningun mensaje, ingrese untexto. Muchas gracias!";
    alert("Ingresa texto y veras que lo encripta!");

    }

}

function desencriptar(){
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let texto = document.getElementById("texto").value;
    let nino = document.getElementById("nino");
    parrafo = document.getElementById("parrafo");

    let cifrarTexto = texto
   

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("texto").value = cifrarTexto;
        tituloMensaje.textContent = "Su mensaje a sido desexcriptado con exito";
        parrafo.textContent = "";
        nino.src ="./imagenes/newidea.png";
    }else{
        nino.src ="./Imagenes/pensar.jpg";
        tituloMensaje.textContent = "No se encontro ningun mensaje, ingrese untexto. Muchas gracias!";
        alert("Ingresa texto y veras que lo desencripta!");
    

    }

}

