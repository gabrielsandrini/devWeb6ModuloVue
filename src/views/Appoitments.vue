<template>
  <div>
    <Nav />
    <div class="container-fluid">
      <div class="mt-3 d-flex justify-content-between">
        <b-button to="/novo-agendamento" variant="secondary" class="align-self-center">
          <i class="fas fa-plus"></i> Novo Agendamento
        </b-button>
      </div>
      <div class="my-3">
        <b-table id="table-appoitments" hover :items="items">
          <template v-slot:cell(acoes)="appoitment">
            <b-button @click="editAppoitment(appoitment)" class="mx-1" variant="warning"
              >Editar</b-button
            >
            <b-button @click="deleteAppoitment(appoitment)" variant="danger"
              >Excluir</b-button
            >
          </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table-appoitments"
          ></b-pagination>
        </div>
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
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [
      ],
      fields: ["id", "paciente", "medico", "data"],
    };
  },
  mounted() {
    this.$http.get("/api/appoitments").then((result) => {
      this.items = result.data;
    });
  }
};
</script>

<style>
</style>