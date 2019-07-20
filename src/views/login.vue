<template>
  <section class='login'>
    <div class="row">
      <div class="col s7">
        <div class="welcome">
          <h1 class="display">Que bom que você veio!</h1>
          <img src="src/assets/images/sofa.png" alt="ilustração de um sofá" width="500" class="sofa">
          <div class="copyright">
            <p>Feito com <b></b> em <strong>São José dos Campos.</strong></p>
            <p>©2019 Cobertura Serviços Imobiliários.</p>
          </div>
        </div>
      </div>
      <div class="col s5 login-form">
        <div class="container">
          <div class="login-logo">
            <a href="/">
            <img src="src/assets/images/logo_colored.png" alt="Logo do Cobertura" width="250">
            </a>
          </div>
          <div class="login-headers">
            <h1>Seja bem-vindo.</h1>
            <h2>Faça login para continuar:</h2>
            <div id='alertMessage' class='alert' role="alert"></div>
          </div>
          <form id="login-form" name="login-form">
            <div class="row">
              <div class="input-field col s12">
                <input name="email" type="email" class="validate" required>
                <label for="Email">Email</label>
                <span class="helper-text" data-error="Esse e-mail parece estar errado."></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 margin-none">
                <input name="password" type="password" class="validate" required>
                <label for="password">Senha</label>
                <router-link to="#" class="helper-password">Esqueceu a senha?</router-link>
              </div>
            </div>
            <button @click='login' type='submit' class="btn btn-primary">LOGIN</button>
            <div class="register">
              <p>Ainda não tem uma conta?</p>
              <router-link to="/cadastro">Crie uma!</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bem-vindo ao Cobertura',
    }
  },
  methods: {
    login (event) {
      console.log('cliquei no botão login')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/libs.css';
@import '../assets/css/style.css';
</style>