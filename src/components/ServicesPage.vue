<template>
  <section
    class="overflow-hidden"
  >
    <v-row
      class="light"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          src="@/assets/Webdesign.jpg"
          height="100%"
        />
      </v-col>

      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <BaseBubble2 style="transform: translateX(55%)"/>
            <BaseHeading class="primary--text">
              Servicios
            </BaseHeading>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="primary"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="service.icon"
              />
            </v-avatar>

            <BaseText>
              <div
                class="mb-2"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
              <div v-text="service.blurb1" />
            </BaseText>
          </v-col>
          <v-col cols="12">
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                src="@/assets/Vue.png"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                src="@/assets/Angular.jpg"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                src="@/assets/Nodejs.png"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                src="@/assets/typescript.svg"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                src="@/assets/Netcore.png"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                contain
                src="@/assets/mongo.png"
              />
            </v-avatar>
            <v-avatar
              class="elevation-5 ml-5"
              size="50"
            >
              <v-img
                contain
                src="@/assets/mysql.svg"
              />
            </v-avatar>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'ServicesPage',
    components: {
      BaseHeading: () => import('@/components/base/Heading.vue'),
      BaseText: () => import('@/components/base/Text.vue'),
      BaseBubble2: () => import('@/components/base/Bubble2.vue')
    },
    data: () => ({
      services: [
        {
          name: 'DESAROLLO',
          icon: 'mdi-code-tags',
          blurb: 'La innovación y creatividad son los ejes',
          blurb1: 'en el desarrollo de soluciones informáticas.',
        },
        {
          name: 'DISEÑO UX',
          icon: 'mdi-pencil-outline',
          blurb: 'Nuestras soluciones se estructuran y diseñan',
          blurb1: 'en función a la experiencia de usuario.',
        },
        {
          name: 'TECNOLOGÍAS',
          icon: 'mdi-apps',
          blurb: 'Backend: .Node, Expressjs Nestjs, NET Core',
          blurb1: 'Frontend: Vue, Angular.',
        },
        {
          name: 'SOPORTE',
          icon: 'mdi-account',
          blurb: 'Soporte técnico 24/7 con',
          blurb1: 'profesionales y técnicos capacitados.',
        },
      ],
    }),
  }
</script>
