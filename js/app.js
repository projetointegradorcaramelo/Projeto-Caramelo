class GerenciadorTelas {
  constructor() {
    this.telas = Array.from(document.querySelectorAll('.tela'));
    this.controles = document.querySelectorAll('[data-screen]');
  }

  mostrar(idTela) {
    this.telas.forEach((tela) => {
      const estaAtiva = tela.id === idTela;
      tela.classList.toggle('tela--ativa', estaAtiva);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  conectarControles() {
    this.controles.forEach((controle) => {
      controle.addEventListener('click', (evento) => {
        evento.preventDefault();
        this.mostrar(controle.dataset.screen);
      });
    });
  }
}

class SeletorCategorias {
  constructor() {
    this.categorias = document.querySelectorAll('.categoria');
  }

  conectar() {
    this.categorias.forEach((categoria) => {
      categoria.addEventListener('click', () => {
        this.categorias.forEach((item) => item.classList.remove('categoria--ativa'));
        categoria.classList.add('categoria--ativa');
      });
    });
  }
}

class FormulariosAutenticacao {
  constructor(gerenciadorTelas) {
    this.gerenciadorTelas = gerenciadorTelas;
    this.formularioCadastro = document.getElementById('signup-form');
    this.formularioLogin = document.getElementById('login-form');
  }

  conectar() {
    this.formularioCadastro.addEventListener('submit', (evento) => {
      evento.preventDefault();

      const email = document.getElementById('signup-email').value;
      document.getElementById('login-email').value = email;
      this.gerenciadorTelas.mostrar('login');
    });

    this.formularioLogin.addEventListener('submit', (evento) => {
      evento.preventDefault();
      this.gerenciadorTelas.mostrar('inicio');
    });
  }
}

const gerenciadorTelas = new GerenciadorTelas();
gerenciadorTelas.conectarControles();

new SeletorCategorias().conectar();
new FormulariosAutenticacao(gerenciadorTelas).conectar();
