<template>
    <div>
        <h1>memadsadsadsadssade</h1>
        <b-button variant="primary">
            <b-icon icon="arrow-down"></b-icon>
        </b-button>

        <b-table striped hover :items="items" :fields="fields">
            <template v-slot:cell(editar)="linhaEvento">
    
                <b-button @click="editarEvento(linhaEvento)">Editar</b-button>


            </template>
        </b-table>
    </div>
  
</template>

<script>
export default {
    name: "Pacientes",
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age', 'editar'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>

<style>

</style>