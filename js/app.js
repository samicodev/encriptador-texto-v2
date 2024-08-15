/* Variables para elementos de la section entrada */
const textoEntrada = document.getElementById('textoEntrada');

/* Variables para elementos de la section resultado */
const mensajeCopiado = document.getElementById('mensajeCopiado');

const textoResultado = document.getElementById('textoResultado');
const resultadoMunieco = document.getElementById('resultadoMunieco');
const resultadoInformacion = document.getElementById('resultadoInformacion');
const botonCopiar = document.getElementById('botonCopiar');
const salidaButtons = document.getElementById('salidaButtons');

/* Funcion para cargar el archivo .txt en el textarea */
function cargarArchivo() {
  const input = document.getElementById('file-input');
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      textoEntrada.value = e.target.result; // Cargar el contenido del archivo en el textarea
    }
    reader.readAsText(file);
  }
}

/* Funcion para encriptar el texto */
function encriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
      modificarDisplay()
  }
}

/* Validacion para permitir solo letras en minúsculas y sin acentos */
function validarTexto() {
  let expresionRegular = /^[a-z\s!]*$/;
  if (textoEntrada.value.trim() !== "") { //Condicion para envitar el textarea de entrada vacio
    if (!expresionRegular.test(textoEntrada.value)) { //Condicion para evitar letras en minúsculas y sin acentos
      alert('Debes ingresar letras en minúsculas y sin acentos.');
      return false;
    }
    return true;
  } else {
    alert('Debes ingresar un texto, el campo no puede estar vacio.');
    return false;
  }
}

/* Funcion para copiar el texto encriptado */
function copiarTexto() {
  if(textoResultado.value !== ""){
    navigator.clipboard.writeText(textoResultado.value)
  mensajeCopiado.style.display = 'block';

    setTimeout(function() {
      mensajeCopiado.style.display = 'none';
    }, 1000);
  }else{
    alert('El campo esta vacio, no hay texto que copiar.')
  }

}

/* Funcion para descargar el texto encriptado o desencriptado */
function descargarTexto() {
  var texto = textoResultado.value;

  var blob = new Blob([texto], { type: 'text/plain' });

  botonDescargar.href = URL.createObjectURL(blob);
  botonDescargar.download = 'miArchivo.txt';
}

/* Funcion para desencriptar el texto */
function desencriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
      modificarDisplay()
  }
}

/* Funcion para nodificar la propiedad display de imagenes y textos */
function modificarDisplay() {

  resultadoMunieco.style.display = 'none';
  resultadoInformacion.style.display = 'none';
  textoResultado.style.display = 'block';
  salidaButtons.style.display = 'flex';
}

