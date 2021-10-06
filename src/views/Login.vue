<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center align-items-center h-100">
      <b-card no-body>
        <b-card-body>
          <b-form @submit="doLogin">
            <b-form-group label="E-mail" label-for="email" class="mb-3">
              <b-input
                id="email"
                type="email"
                v-model="login.email"
                required
              ></b-input>
            </b-form-group>
            <b-form-group label="Senha" label-for="senha" class="mb-3">
              <b-input
                id="senha"
                type="password"
                v-model="login.password"
                required
              ></b-input>
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
  data() {
    return {
      login: {
        email: "admin@admin.com",
        password: "123456",
      },
    };
  },
  methods: {
    doLogin(event) {
      event.preventDefault();
      console.log(this.login);
      console.log(this.login.email);
      console.log(this.login.password);

      this.$http
        .post("/login", this.login)
        .then((response) => {
          console.log(response.data);
          console.log(response);
          this.$router.push("/agendamentos");
        })
        .catch((error) => {
          console.error("Não foi possível realizar o Login");
          console.error(error);
        });
    },
  },
};
</script>

<style>
.card {
  width: 18rem;
}
</style>