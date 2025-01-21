<template>
  <section
  id="contactanos"
  class="overflow-hidden"
  >
     <v-row
        class="primary white--text"
        no-gutters
        align="center"
        >
        <v-col
            class="pa-5"
            cols="12"
            md="1"
            >
            <div >
            <b class="secondary--text font-weight-thin text-uppercase">Contáctenos:</b> 
            </div>
        </v-col> 
        <v-col
            class="pa-5"
            cols="12"
            md="5"
            >
            <div>
                <a
                href="https://www.google.com/maps/place/Decafe+%26+M%C3%A1s/@-11.9846442,-77.098279,17z/data=!3m1!4b1!4m5!3m4!1s0x9105cf1ee0e3aaad:0x4274ccc84951d5a3!8m2!3d-11.9846442!4d-77.0960903?hl=es-419"
                target="blank"
                class="text-decoration-none"    
                >
                <v-icon
                large
                color="secondary"
                >
                mdi-map-marker
                </v-icon>
                   <b class="success--text font-weight-thin ml-5">Av. Los Olivos Mz. A Lte.15 Villa El Amauta San Martín de Porres  Lima - Perú</b> 
                </a>
            </div>
        </v-col> 
        <v-col
            class="pa-5"
            cols="12"
            md="3"
            >
            <div>
                <v-icon
                large
                color="secondary"
                >
                mdi-phone
                </v-icon>
                <b class="success--text font-weight-thin ml-5">(511) 964-023-536</b>   
            </div>
        </v-col>
        <v-col
            class="pa-5"
            cols="12"
            md="3"
            >
            <div>
                <a
                    class="text-decoration-none"
                    href="mailto:eric.marin2903@gmail.com"
                >
                    <v-icon
                    large
                    color="secondary"
                    >
                    mdi-email
                    </v-icon>
                    <b class="success--text font-weight-thin ml-5">eric.marin2903@gmail.com</b> 
                </a>
            </div>
        </v-col>
    </v-row> 
  </section>
</template>

<script>
  export default {
    name:'ContactoPage',
  }
</script>