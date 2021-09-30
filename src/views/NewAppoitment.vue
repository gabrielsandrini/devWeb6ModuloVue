<template>
  <div>
    <Nav />
    <div class="container-fluid">
      <div class="my-3">
        <b-form @submit="createAppointment">
          <b-form-group label="Paciente" label-for="paciente" class="mb-3">
            <b-form-select
              class="form-select"
              id="paciente"
              v-model="appointment_model.paciente"
              :options="optionsPatient"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group label="Médico" label-for="medico" class="mb-3">
            <b-form-select
              class="form-select"
              id="medico"
              :options="optionsDoctor"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group label="Data" label-for="data" class="mb-3">
            <b-form-datepicker id="data" required></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Hora" label-for="hora" class="mb-3">
            <b-form-select
              class="form-select"
              id="hora"
              :options="optionsHour"
              required
            ></b-form-select>
          </b-form-group>
          <div class="d-flex justify-content-end">
            <b-button variant="secondary" class="mx-3" to="/agendamentos">
              Cancelar
            </b-button>
            <b-button variant="success" type="submit">
              Agendar Horário
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
  name: "Novo Agendamento",
  components: {
    Nav,
  },
  data() {
    return {
        appointment_model:{
          paciente: 0,
          medico: 0,
        },
      optionsPatient: [{ value: 1, text: "Paciente 1" }],
      optionsDoctor: [{ value: 1, text: "Médico 1" }],
      optionsHour: [{ value: 1, text: "13:00h" }],
    };
  },
    methods: {
      createAppointment(data) {
          this.$http
            .post("/appointments", data.appointment_model)
            .then(response => {
              console.log("Criado com sucesso!", response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }
  },
};
</script>

<style>
</style>