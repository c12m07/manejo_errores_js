try {
  console.log('hola')
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err);
}

function crearGato (nombre, edad) {

  const Gato = {
    nombre : nombre,
    edad : edad,
    meow : function() {
      return 'Meow!';
    }
  }

  return Gato;

}

function agregarPropiedad (objeto, property) {

  objeto.property = null
  return objeto;

}

function invocarMetodo (objeto, metodo) {

  objeto.metodo();

}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {

  var result = objetoMisterioso.numeroMisterioso * 5
  return result;

}

function eliminarPropiedad (objeto, unaPropiedad) {

  delete objeto.unaPropiedad;
  return objeto;

}

function nuevoUsuario (nombre, email, password) {

  var user = {
    nombre : nombre,
    email : email,
    password : password
  }

  return user;

}

function tieneEmail (usuario) {

  if (usuario.hasOwnProperty('email')) {
    console.log(true)
  } else {
    console.log(false)
  }

}

function tienePropiedad (objeto, propiedad) {

  if (objeto['key'] === propiedad) {
    console.log(true)
  } else {
    console.log(false)
  }

}

function verificarPassword (usuario, password) {

  if (usuario['password'] === password) {
    return true;
  } else {
    return false;
  }

}

function actualizarPassword (usuario, nuevaPassword) {

  usuario.password = nuevaPassword;
  return usuario;

}

function agregarAmigo (usuario, nuevoAmigo) {

  usuario.amigos.push(nuevoAmigo);
  return usuario;

}

function pasarUsuarioAPremium (usuarios) {

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  } 
  return usuarios;

}

function sumarLikesDeUsuario (usuario) {

  var result = 0;

  for (let i = 0; i < usuario.posts.length; i++) {
    result = result + usuario.posts[i].likes;
  }
  return result;

}

function agregarMetodoCalculoDescuento (producto) {

  producto.calcularPrecioDescuento = function(){
    var result = this.precio - (this.precio * this.porcentajeDeDescuento);
    return result;
  }
  return producto;

}