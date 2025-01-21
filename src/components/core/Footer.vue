<template>
  <v-footer
    height="60"
    padless
    color="secondary"
  >
    <v-container fluid>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="text-center primary--text">
            <b class="font-weight-thin">&copy;{{ new Date().getFullYear() }}</b>
          </div>
        </v-col>
        <v-spacer />
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div
            id="formatoLogo"
            class="text-center font-weight-light"
          >
            <b class="font-weight-thin primary-text">Decafe & Tech</b>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="font-weight-thin text-center">
            Made with
            <v-icon
              size="18"
              color="primary"
            >
              mdi-heart
            </v-icon>
            by <a
              class="primary--text text-decoration-none"
              href="https://www.decafeymas.com"
            >Decafe & Tech S.A.C.</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      // SocialMedia: () => import('@/components/SocialMedia'),
    },
  }
</script>
<style scoped>
#formatoWhatsapp  {
    font-family:Helvetica;
    font-size: 1.3rem;
}
#formatoLogo {
    font-family: 'Mina', sans-serif;
    font-size: 1rem;
    margin-top: 1%;
}
</style>
