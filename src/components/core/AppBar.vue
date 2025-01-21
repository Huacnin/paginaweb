<template>
  <div>
    <v-app-bar
      v-scroll="onScroll"
      :color="!isScrolling ? 'transparent' : 'secondary'"
      fixed
      flat
    >
    <v-slide-y-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/Logo1.png')"
        class="shrink"
        contain
        max-height="35"
      />
    </v-slide-y-transition>
    <v-slide-y-transition>
        <tr
          v-if="showLogo"
          id="formatoLogo"
          class="primary--text hidden-sm-and-down"
        >
          Cafe<b id="formatoand" class="font-weight-thin ml-1 mr-1 font-italic">&</b>Tech
        </tr>
      </v-slide-y-transition>
      <v-spacer />
      <v-slide-y-transition>
        <tr
          v-if="showLogo"
          id="formatoSlogan"
          class="primary--text hidden-sm-and-down"
        >
        Aplicaciones Tecnológicas para Negocios
        </tr>
      </v-slide-y-transition>   
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn
          v-if="showLogo"
          id="formatoApp"
          class="ml-3 white--text floating-sm-left font-weight-thin"
          medium
          rounded
          color="primary"
          href="http://www.proyectoweb.chejampi.com/"
          target="blank"
        >
        Proyectos Web

          <v-icon
            right
            medium
          >mdi-apps
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar> 
  </div>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      // SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),

    methods: {
      onScroll () {
        const offset = window.scrollY
        this.isScrolling = offset > 50
        this.showLogo = offset > 50
      },
    },
  }
</script>
<style scoped>
#formatoand  {
    font-family:Helvetica;
    font-size: 1.5rem;
}
#formatoLogo {
    font-family: 'Mina', sans-serif;
    font-size: 1.8rem;
    margin-left: -3.7em;
    margin-top: 1%;
}
#formatoSlogan  {
    font-family: 'Mina', sans-serif;
    font-size: 1.2rem;
}
#formatoApp {
    font-family: 'Mina', sans-serif;
    font-size: 1rem;
}
</style>
