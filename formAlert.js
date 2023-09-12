import validate from "./validaciones.js";

const $formEvent = document.getElementById("form-event");

$formEvent.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData($formEvent);
  const data = {
    nombre: formData.get("nombre"),
    apellidos: formData.get("apellidos"),
    telefono: formData.get("telefono"),
    gmail: formData.get("gmail"),
    departamento: formData.get("departamento"),
  };
  
  const nombre = validate.Nombre(data.nombre);
  const gmail = validate.Gmail(data.gmail);
  const departamento = validate.Departamento(data.departamento);
  const apellidos = validate.Apellido(data.apellidos);
  const telefono = validate.Telefono(parseInt(data.telefono));
 
   if(!nombre || !gmail || !departamento || !apellidos || !telefono){
    //retornar y terminar
    console.log("hey tienes un error");
  }
  //retonar algo aqui alarta de exito
});
