<template>
  <section
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        cols="12"
        md="6">
        <v-img
          :src="require('@/assets/ti.jpg')"
          height="160vh"
        />
      </v-col>

      <v-col
        class="layout wrap"
        cols="12"
        md="6">
        <div class="text-center mx-auto">
          <v-img
            contain
            :src="require('@/assets/Logo1.png')"
            class="grow hidden-sm-and-down mt-6"
            max-height="45"
            width="100%"
          />
          <p id="formatoLogo" class="font-weight-thin"> Decafe<b id="formatoand" class="font-weight-thin ml-1 mr-1 font-italic">&</b>Tech</p> 
          <p id="formatoSlogan" class="accent--text font-weight-thin">Technology Applications for Business</p> 
          <hr>
        </div>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="6"
          >
            <BaseHeading class="mt-15 text-center">
              Bienvenidos!
            </BaseHeading>
            
            <BaseText class=" pl-5 mr-5 mt-10 text-justify">
                Somos una consultora  que  diseña, desarrolla y  provisiona  soluciones
                tecnológicas  que  ayudan  a las empresas  a transformarse digitalmente
                generando la automatización de sus procesos de gestión y fortaleciendo su
                relacion comercial con sus clientes y proveedores. <br>
                El code del diseño y desarrollo  de nuestras soluciones tecnológicas se
                basan  en  la experiencia, la  innovacion  y  la creatividad del usuario, lo
                que nos permite ofrecer  soluciones que se adapten a los requerimientos
                y necesidades de nuestros clientes.
            </BaseText>
          </v-col>
        </v-row>
        <v-img
          contain
          :src="require('@/assets/Tech.jpg')"
          class="grow hidden-sm-and-down mb-5"
          max-height="175"
          width="100%"
          position="right"
          style="transform: rotate(180deg) translateX(-74%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  components: {
    BaseHeading: () => import('@/components/base/Heading.vue'),
    BaseText: () => import('@/components/base/Text.vue'),
  },

}
</script>
<style scoped>
#formatoand {
    font-family:Helvetica;
    font-size: 1.5rem;
}
#formatoLogo {
    font-family: 'Mina', sans-serif;
    font-size: 2rem;
    margin-top: 3%;
}
#formatoSlogan {
    font-family: 'Mina', sans-serif;
    font-size: 0.7rem;
    margin-top: -9%;
}
</style>
