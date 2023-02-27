const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const btnEliminar = document.querySelector(".btn-eliminar")


function encriptar(){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],]
    let texto = textArea.value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar() {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],]
    let texto = textArea.value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
  }
  

function copiarMensaje() {
    const texto = mensaje.value.toLowerCase();
    mensaje.select();
    document.execCommand("copy");
}   

function borrarMensaje(){
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('./imagenes/Muñeco.png')";
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarMensaje);
btnEliminar.addEventListener("click", borrarMensaje);