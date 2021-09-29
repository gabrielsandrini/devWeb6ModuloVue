<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Agendamentos</b-nav-item>
                    <b-nav-item href="#">Pacientes</b-nav-item>
                    <b-nav-item href="#">Médicos</b-nav-item>
                    <b-nav-item href="#">Secretárias</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-button variant="outline-light">Sair</b-button>
                </b-navbar-nav>
            </b-collapse>    
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style>

</style>