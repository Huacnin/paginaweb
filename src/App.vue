<template>
  <v-app>
    <AppBar/>
    <ViewApp/>
    <v-btn
      id="flotanteWhats"
      rounded
      large
      class="text-capitalize white--text  font-weight-medium"
      href="https://wa.me/51964023536?text=Me%20interesa%20conocer%20más%20sobre%20sus%20aplicaciones"
      target="blank"
      >
      <v-img
        contain
        width="32"
        :src="require('@/assets/Whatsapp.png')"
        class="mr-3"
      />
      WhatsApp
    </v-btn>
    <v-slide-y-transition>
      <v-btn
        v-if="showButton"
        class="button-up"
        fab
        outlined
        color="success"
        @click="scrollUp()"
      >
        <v-icon color="primary">
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </v-slide-y-transition>
    <Footer></Footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      AppBar: () => import('@/components/core/AppBar'),
      Footer: () => import('@/components/core/Footer'),
      ViewApp: () => import('@/components/core/ViewApp'),
    },
    data: () => ({
      showButton: false
    }),

    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },

    methods: {
      onScroll() {
        if (window.scrollY > 200) {
          this.showButton = true
        } else {
          this.showButton = false
        }
      },
      scrollUp () {
        const currentScroll = document.documentElement.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(this.scrollUp)
          window.scrollTo(0, currentScroll - (currentScroll / 10))
        }
      },
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Helvetica');
#flotanteWhats{
    display:scroll;
    position:fixed;
    bottom:160px;
    left:30px;
    font-family:Arial, Helvetica, sanSs-serif;
    font-size: 1.3rem;
    background-color:#25d366;
}
.button-up {
  display:scroll;
  position: fixed;
  right: 40px;
  bottom:160px;
  background-color: #e3e3e3;
  border-color: #ffffff;
  transition: 0.1s ease;
}
.button-up:hover{
  transform:scale(1.12);
  border-color:6px #122A3B;
  border-bottom-color: #ffffff ;
  border-top-color: #ffffff;
  border-right-color: #ffffff;
  border-left-color: #ffffff;
}
</style>
