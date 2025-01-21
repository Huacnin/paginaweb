<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="primary white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="4"
      >
        <BaseBubble1 style="transform: rotate(360deg) translate(290px,-15%)"/>

        <BaseHeading class="mb-10 ml-10">
          Envíe su Mensaje:
        </BaseHeading>

        <v-form
          ref="form"
          v-model="valid"
          max-width="600"
          lazy-validation
          class="ml-15"
        >
          <v-text-field
            v-model="from_name"
            :rules="from_nameRules"
            label="Nombres"
            required
            outlined
            dark
          />

          <v-text-field
            v-model="from_email"
            :rules="from_emailRules"
            label="E-mail"
            required
            outlined
            dark
          />

          <v-text-field
            v-model="from_telefono"
            :rules="from_telefonoRules"
            label="Teléfono"
            required
            outlined
            dark
            type="number"
          />

          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            label="Asunto"
            required
            outlined
            dark
          />

          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Mensaje"
            required
            outlined
            dark
          />
          <v-btn
            :disabled="!valid"
            :loading="loading"
            class="mr-3"
            @click="submit"
            @click.native="loader = 'loading'"
           >
            enviar mensaje
          </v-btn>
          <v-btn @click="clear(), ocultarLimpiar()" v-if="limpiar">
            limpiar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import emailjs from 'emailjs-com'
  import Swal from 'sweetalert2'

  export default {
    name: 'GetInTouch',
    components:{
      BaseHeading: () => import('@/components/base/Heading.vue'),
      BaseBubble1: () => import('@/components/base/Bubble1.vue')
    },
    data: () => ({
      valid:false,
      from_name: '',
      from_nameRules: [
        v => !!v || 'Completar el nombre es obligatorio',
        v => (v && v.length > 3) || 'El nombre debe ser mayor a 3 caracteres',
      ],
      from_email: '',
      from_emailRules: [
        v => !!v || 'Digite un E-mail válido por favor',
        v => /.+@.+/.test(v) || 'E-mail es un campo obligatorio',
      ],
      from_telefono: '',
      from_telefonoRules: [
        v => !!v || 'Complete el Teléfono por favor',
        v => (v && v.length > 8) || 'El teléfono debe ser mayor a 8 caracteres',
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'Complete el campo Asunto',
        v => (v && v.length > 5) || 'Asunto es un campo obligatorio',
      ],
      message: '',
      messageRules: [v => !!v || 'Escriba su mensaje...'],
      loader: null,
      loading: false,
      limpiar:false
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 500)
        this.loader = null
      },
    },
    created () {
      emailjs.init('RGeoaeomWawpOSN_S')
    },

    methods: {
      submit () {
        const data = {
          from_name: this.from_name,
          from_email: this.from_email,
          from_telefono: this.from_telefono,
          message: this.message,
          subject: this.subject,
        }
        if (this.$refs.form.validate()) {
          emailjs.send('default_service','template_t6hmt79', data)
            .then((res) => {
              this.alertMensaje(res)
              this.clear()
            }, (error) => {
              console.log('FAILED...', error)
            })
        } else {
          this.alertError()
          this.mostrarLimpiar()
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      mostrarLimpiar(){
      this.limpiar=true
      },
      ocultarLimpiar(){
      this.limpiar=false
      },
      alertError () {
        Swal.fire({
          position: 'bottom-end',
          icon: 'question',
          title: 'Debe completar los datos del formulario!',
          showConfirmButton: false,
          timer: 1500,
        })
      },
      alertMensaje () {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          title: 'Gracias por comunicarse con nosotros. En breve nos contactaremos.',
          timer: 3000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        })
      },
    },
  }
</script>