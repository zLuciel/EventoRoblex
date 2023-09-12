function messageError(element, message, regex) {
  if (!regex) {
    element.textContent = message;
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 4000);
    return false;
  } else {
    element.style.display = "none";
    return true;
  }
}

const validate = {
  Nombre: (nombre) => {
    const nombrError = document.getElementById("nombrError");
    const expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const message = "Ingrese un nombre valido";
    messageError(nombrError, message, expRegNombre.test(nombre));
  },
  Gmail: (gmail) => {
    const correoError = document.getElementById("correoError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    messageError(correoError, "Correo no valido", emailPattern.test(gmail));
  },
  Departamento: (departamento) => {
    const depError = document.getElementById("depError");
    const message = "Eliga uno de los apartamentos";
    messageError(depError, message, departamento);
  },
  Apellido: (apellido) => {
    const apellidoError = document.getElementById("apellidoError");
    const expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const message = "Ingrese un apellido valido";
    messageError(apellidoError, message, expRegApellidos.test(apellido));
  },
  Telefono: (telefono) => {
    const telefonoError = document.getElementById("telefonoError");
    const expRegTelf = /^\d{9}$/;
    const message = "Ingrese un numero valido";
    messageError(telefonoError, message, expRegTelf.test(telefono));
  },
};

export default validate;