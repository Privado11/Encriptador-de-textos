const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const btnEliminar = document.querySelector(".btn-eliminar")

const codigos = {
    "a": "ai",
    "e": "ufat",
    "i": "imes",
    "o": "ober",
    "u": "enter"
  };

function encriptar(){
    const texto = textArea.value.toLowerCase();

    if (texto.trim() === "") {
        alert("Por favor, ingrese un mensaje para encriptar.");
        return;
    }

    let mensajeEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (codigos.hasOwnProperty(letra)) {
            mensajeEncriptado += codigos[letra];
        } else {
            mensajeEncriptado += letra;
        }
    }
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(){
    const texto = textArea.value.toLowerCase();

    if (texto.trim() === "") {
        alert("Por favor, ingrese un mensaje para desencriptar.");
        return;
    }

    let mensajeDesencriptado = "";
    for (let i = 0; i < texto.length; i += 4) {
        const codigo = texto.substring(i, i + 4);
    if (Object.values(codigos).includes(codigo)) {
        mensajeDesencriptado += Object.keys(codigos)[Object.values(codigos).indexOf(codigo)];
        } else {
            mensajeDesencriptado += codigo;
        }
    }

    mensaje.value = mensajeDesencriptado;
    textArea.value = "";
}

function copiarMensaje() {
    const texto = mensaje.value.toLowerCase();
    if (texto.trim() === "") {
        alert("No hay ningún mensaje para copiar.");
        return;
    }else{
        mensaje.select();
        document.execCommand("copy");
        alert("Mensaje copiado al portapapeles");
    }
}

function borrarMensaje(){
    mensaje.value = "";
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarMensaje);
btnEliminar.addEventListener("click", borrarMensaje);