//base de datos de usuarios y contraseñas

const usersDatabase = [
  {
    nombreUsuario: 'Juan Valdez',
    username: 'user1',
    password: 'pass1',
  },
  {
    nombreUsuario: 'Carlos Perez',
    username: 'user2',
    password: 'pass2',
  },
  {
    nombreUsuario: 'Lina Velez',
    username: 'user3',
    password: 'pass3',
  },
];

const userTimeline = [
  {
    nombreUsuario: 'Juan Valdez',
    comentario: 'Me alegra trabajar en este proyecto!',
    avatar: './avatar/jramirez.png',
    timeline: 'Hace unos minutos',
  },
  {
    nombreUsuario: 'Carlos Perez',
    comentario: 'Espero que esto sea un éxito!',
    avatar: './avatar/aguevara.png',
    timeline: 'Hace 5 minutos',
  },
  {
    nombreUsuario: 'Lina Velez',
    comentario: 'Este es mi primer proyecto y estoy emocionada de aprender.',
    avatar: './avatar/lmciro.png',
    timeline: 'Hoy',
  },
  {
    nombreUsuario: 'Juan Valdez',
    comentario: '¡Estoy listo para compartir mis habilidades!',
    avatar: './avatar/jramirez.png',
    timeline: 'Ayer',
  },
];

// Función para capturar los datos del formulario

// Seleccionar el elemento HTML por su ID
const button = document.getElementById('ingreso');
const usuario = document.getElementById('usuario');
const password = document.getElementById('current-password');
const mensajeModal1 = document.getElementById('mensajes-modales');
const mensajeModal2 = document.getElementById('mensajes-modales-success');
const dialogWarning = document.getElementById('dialog-box-warning');
const dialogSuccess = document.getElementById('dialog-box-success');
const dialog = document.getElementById('dialog-box-warning');
const dialog1 = document.getElementById('dialog-box-success');
const usuarioLogueado = document.getElementById('usuario-logueado');
const contenedorLogin = document.getElementById('contenedor-login');
const contenedorLogueado = document.getElementById('contenedor-logueado');
const contenedorUserTimeline = document.getElementById('user-timeline');
const footerComments = document.getElementById('footer-comments');

//tomando datos para los comentarios
const headerComments = document.getElementById('header-comments');
const verComentarios = document.getElementById('user-timeline');

function showComments() {
  // Iterar sobre el array de comentarios
  verComentarios.style.display = 'block';
  userTimeline.forEach(comentario => {
    const insertarComentarios = `
      <div class="avatar-user">
        <img src="${comentario.avatar}" alt="Avatar del usuario" class="avatar">
        <span class="username">@${comentario.nombreUsuario}</span>
      </div>
      <div class="comment-content">
        <ul id="comments-list">
          <li>${comentario.comentario}</li>
          <div id="footer-comments">
    <a href="#" class="reply-btn">Responder</a>
    <span class="timestamp">20 minutos ago</span>
  </div>
        </ul>
      </div>`;
    headerComments.innerHTML += insertarComentarios;
  });
}

document.querySelector('.cerrar-modal').addEventListener('click', () => {
  dialog.close();
  document.body.style.filter = 'none';
});
document.querySelector('#contenedor-logueado').addEventListener('click', () => {
  contenedorLogueado.style.display = 'none';
  contenedorUserTimeline.style.display = 'none';
  contenedorLogin.style.display = 'block';
  window.location.reload();
});

let usuarioValido = true;
let nombrelogueado;

button.addEventListener('click', function (event) {
  // Prevenir la recarga de la página)
  event.preventDefault();

  const usuarioValue = usuario.value;
  const passwordValue = password.value;

  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usuarioValue === usersDatabase[i].username &&
      passwordValue === usersDatabase[i].password
    ) {
      usuarioValido = true;
      nombrelogueado = usersDatabase[i].nombreUsuario;
      break;
    } else {
      usuarioValido = false;
    }
  }

  if (usuarioValido === false) {
    mensajeModal1.textContent =
      'Upss Usuario o contraseña incorrectos. Intenta de nuevo.';
    document.body.style.backgroundColor = '#ffff';
    document.body.style.filter = 'blur(2px)';
    dialogWarning.showModal();
  } else {
    contenedorLogin.style.display = 'none';
    contenedorLogueado.style.display = 'block';
    usuarioLogueado.textContent = `${nombrelogueado}`;
    showComments();
  }
});
