import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Appoitments from "../views/Appoitments.vue";
import Doctors from "../views/Doctors.vue";
import Patients from "../views/Patients.vue";
import NewAppoitment from "../views/NewAppoitment.vue";
import NewPatient from "../views/NewPatient.vue";
import NewDoctor from "../views/NewDoctor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/agendamentos",
    name: "Agendamentos",
    component: Appoitments,
  },
  {
    path: "/medicos",
    name: "Médicos",
    component: Doctors,
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    component: Patients,
  },
  {
    path: "/novo-agendamento",
    name: "Novo Agendamento",
    component: NewAppoitment
  },
  {
    path: "/novo-paciente",
    name: "Novo Paciente",
    component: NewPatient
  },
  {
    path: "/novo-medico",
    name: "Novo Médico",
    component: NewDoctor
  },
];

const router = new VueRouter({
  routes,
});

export default router;