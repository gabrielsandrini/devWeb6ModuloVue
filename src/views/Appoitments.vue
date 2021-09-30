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
  
  
  




  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/agendamentos")
      .then(response => {
        response.data.forEach(item => {
          //Campos do endereço
          let endKeys = Object.keys(item.endereco);
          let enderecoConcat = "";
          //acumulador para retornar os campos do endereço concatenados
          enderecoConcat = endKeys.reduce((acc, key, index) => {
            let concatValue =
              index != 0 ? ", " + item.endereco[key] : item.endereco[key];
            return acc + concatValue;
          }, "");
          item.endereco = enderecoConcat;
          this.eventos.push(item);
        });
        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MeusEventos' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }

};
</script>

<style>
</style>