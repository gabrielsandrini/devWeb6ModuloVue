<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center align-items-center h-100">
      <b-card no-body>
        <b-card-body>
          <b-form>
            <b-form-group label="E-mail" label-for="email" class="mb-3">
              <b-input id="email" type="email" required></b-input>
            </b-form-group>
            <b-form-group label="Senha" label-for="senha" class="mb-3">
              <b-input id="senha" type="password" required></b-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Entrar</b-button>
          </b-form>
        </b-card-body>
        <b-card-footer>
          <a class="card-link" href="#">Esqueceu sua senha?</a>
        </b-card-footer>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
  .card {
      width: 18rem;
  }
</style>