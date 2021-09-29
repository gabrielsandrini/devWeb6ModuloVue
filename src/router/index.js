import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Agendamentos from "../views/Agendamentos.vue";
import Medicos from "../views/Medicos.vue";
import Pacientes from "../views/Pacientes.vue";
import Secretarias from "../views/Secretarias.vue";

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
    component: Agendamentos,
  },
  {
    path: "/medicos",
    name: "Medicos",
    component: Medicos,
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    component: Pacientes,
  },
  {
    path: "/secretarias",
    name: "Secretarias",
    component: Secretarias,
  },
];

const router = new VueRouter({
  routes,
});

export default router;