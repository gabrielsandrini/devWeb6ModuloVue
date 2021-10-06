<template>
  <div>
    <Nav />
    <div class="container-fluid overflow-auto">
      <div class="mt-3 d-flex justify-content-end">
        <b-button
          to="/novo-paciente"
          variant="secondary"
          class="align-self-center"
        >
          <i class="fas fa-plus"></i> Novo Paciente
        </b-button>
      </div>
      <div class="my-3">
        <b-table id="table-patients" hover :items="items">
          <template v-slot:cell(acoes)="patient">
            <b-button @click="editPatient(patient)" class="mx-1" variant="warning">Editar</b-button>
            <b-button @click="deletePatient(patient)" variant="danger">Excluir</b-button>
          </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table-patients"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "Pacientes",
  components: {
    Nav,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [
      ],
      fields: ["id", "nome", "acoes"],
    };
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  created() {
    this.$http.get("/users").then((result) => {
      this.items = result.data;
    });
  },
  methods: {
    editPatient(patient) {
      this.$router.push("/editar-paciente/" + patient.item.id);
    },
    
    deletePatient(patient) {
      if (confirm("Tem certeza que deseja deletar o paciente " + patient.item.nome + "?")) {
        this.$http
        .post("/users", this.patient) 
        .then((response) => {
          console.log(response.data);
          console.log(response);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.error("Não foi possível realizar o Login");
          console.error(error);
        });
      }
    }
  }
};
</script>

<style>
</style>