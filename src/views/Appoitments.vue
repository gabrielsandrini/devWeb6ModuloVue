<template>
  <div>
    <Nav />
    <div class="container-fluid">
      <div class="mt-3 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <h4><!-- dia de hoje --></h4>
          <b-button id="dia-anterior" variant="light"><i class="fas fa-chevron-left"></i></b-button>
          <b-button id="proximo-dia" variant="light"><i class="fas fa-chevron-right"></i></b-button>
        </div>
        <b-button to="/novo-agendamento" variant="secondary" class="align-self-center">
          <i class="fas fa-plus"></i> Novo Agendamento
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "Agendamentos",
  components: {
    Nav,
  },
};
</script>

<style>
</style>