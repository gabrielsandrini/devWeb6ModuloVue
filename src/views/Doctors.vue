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
          <template v-slot:cell(acoes)="doctor">
            <b-button @click="editDoctor(doctor)" class="mx-1" variant="warning"
              >Editar</b-button
            >
            <b-button @click="deleteDoctor(doctor)" variant="danger"
              >Excluir</b-button
            >
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
      ],
      fields: ["id", "nome", "acoes"],
    };
  },
  mounted() {
    this.$http.get("/api/doctors").then((result) => {
      this.items = result.data;
    });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    editDoctor(doctor) {
      this.$router.push("/editar-medico/" + doctor.item.id);
    },

    deleteDoctor(doctor) {
      if (
        confirm(
          "Tem certeza que deseja deletar o médico " + doctor.item.nome + "?"
        )
      ) {
        this.$http
          .post("/api/users", this.doctor)
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
    },
  },
};
</script>

<style>
</style>