<template>
  <q-page padding>
    <h1>Login</h1>
    <p>Unesite svoje korisničke podatke za prijavu.</p>
    
    <q-input v-model="username" label="Korisničko ime" />
    <q-input v-model="password" label="Lozinka" type="password" />
    <q-btn label="Potvrdi" color="primary" @click="loginUser" />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    loginUser() {
      // Logika za login, primjer provjere
      if (this.username && this.password) {
        // Ako su podaci ispravni, obriši polja i preusmjeri korisnika
        console.log("Podaci za prijavu:", this.username, this.password);
        
        // Očisti input polja
        this.username = '';
        this.password = '';

        // Preusmjeri korisnika na stranicu Popis Knjiga
        this.$router.push({ name: 'PopisKnjigaPage.vue' });  // Pretpostavka je da ruta ima naziv 'PopisKnjigaPage.vue'
      } else {
        alert("Molimo unesite korisničko ime i lozinku.");
      }
    }
  }
};
</script>