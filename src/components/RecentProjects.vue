<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <Bubble1
          style="transform: rotate(180deg) translateX(10%)"
        />

        <BaseHeading>
          Proyectos Desarrollados
        </BaseHeading>

        <BaseText class="mb-5">
          SISTEMA DE GESTIÓN DE VENTAS Y CONTROL DE COMENSALES<br>
          SISTEMA DE PLANIFICACIÓN Y DOSIFICACIÓN DE MENÚS<br>
          SISTEMA DE GESTIÓN DE MANTENIMINETO DE EQUIPOS MÉDICOS <br>
          APP MI CAMBIO, Ahorro sin Esfuerzo!
        </BaseText>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.jpeg`)"
                    max-height="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/Negocios1.jpg')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',
    components: {
      BaseHeading: () => import('@/components/base/Subheading.vue'),
      BaseText: () => import('@/components/base/Text.vue'),
      Bubble1: () => import('@/components/base/Bubble1.vue'),
    },

    data: () => ({
      projects: [
        'sisvecomer',
        'sismedic',
        'micambio',
        'quecomo',
      ],
    }),
  }
</script>
