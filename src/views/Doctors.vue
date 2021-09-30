<template>
  <div>
    <Nav />
    <div class="container-fluid overflow-auto">
      <div class="mt-3 d-flex justify-content-end">
        <b-button
          to="/novo-medico"
          variant="secondary"
          class="align-self-center"
        >
          <i class="fas fa-plus"></i> Novo Médico
        </b-button>
      </div>
      <div class="my-3">
        <b-table id="table-doctors" hover :items="items">
          <template #cell(acoes)>
            <b-button class="mx-1" variant="warning">Editar</b-button>
            <b-button variant="danger">Excluir</b-button>
          </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table-doctors"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "Médicos",
  components: {
    Nav,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [
        {nome: "Médico 1", acoes: "" },
        {nome: "Médico 2", acoes: "" }
      ],
      fields: ["nome", "acoes"],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style>
</style>