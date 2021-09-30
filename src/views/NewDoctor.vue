<template>
  <div>
    <Nav />
    <div class="container-fluid">
      <div class="my-3">
        <b-form>
          <b-form-group
            label="Nome Completo"
            label-for="nomeCompleto"
            class="mb-3"
          >
            <b-input id="nomeCompleto" type="text" required></b-input>
          </b-form-group>
          <div class="row">
            <b-form-group label="RG" label-for="rg" class="mb-3 col-6">
              <b-input id="rg" type="text" required></b-input>
            </b-form-group>
            <b-form-group label="CPF" label-for="cpf" class="mb-3 col-6">
              <b-input id="cpf" type="text" required></b-input>
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group label="CRM" label-for="crm" class="mb-3 col-4">
              <b-input id="crm" type="text" required></b-input>
            </b-form-group>
            <b-form-group
              label="Endereço"
              label-for="endereco"
              class="mb-3 col-8"
            >
              <b-input id="endereco" type="text" required></b-input>
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              label="Telefone"
              label-for="telefone"
              class="mb-3 col-6"
            >
              <b-input id="telefone" type="text" required></b-input>
            </b-form-group>
            <b-form-group label="E-mail" label-for="email" class="mb-3 col-6">
              <b-input id="email" type="email" required></b-input>
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              label="Disponibilidade de Horário"
              label-for="disponibilidadeHorario"
              class="mb-3 col-4"
            >
              <b-form-datepicker
                id="disponibilidadeHorario"
                required
              ></b-form-datepicker>
            </b-form-group>
            <div class="col-8"></div>
          </div>
          <div class="d-flex justify-content-end">
            <b-button variant="secondary" class="mx-3" to="/medicos">
              Cancelar
            </b-button>
            <b-button variant="success" type="submit">
              Cadastrar Médico
            </b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "Novo Médico",
  components: {
    Nav,
  },
};
</script>

<style>
</style>