var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var regext = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


form.onsubmit = function (e) {
  if (usuario.value === '') {
    e.preventDefault();
    alert('Debe ingresar un usuario');
    return false;
  } else if (!regext.test(usuario.value)) {
    e.preventDefault();
    alert('Sintaxis incorrecta del Email');
    return false;
  } else if (clave.value === '') {
    e.preventDefault();
    alert('Debe ingresar una clave');
    return false;
  }
}










