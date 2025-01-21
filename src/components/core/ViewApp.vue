<template>
  <div>
    <WelcomePage />
    <Nosotros/>
    <Servicios/>
    <Projects/>
    <GetInTouch/>
    <Contacto/>
  </div>
</template>

<script>
  import WelcomePage from '../WelcomePage.vue';
  import Nosotros from '../AboutMe.vue';
  import Servicios from '../ServicesPage.vue';
  import Projects from '../RecentProjects.vue';
  import GetInTouch from '../GetInTouch.vue';
  import Contacto from '../ContactoPage.vue';

  export default {
    name: 'ViewApp',

    components: {
      WelcomePage,
      Nosotros,
      Servicios,
      Projects,
      GetInTouch,
      Contacto
    },
  }
</script>
