import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#122A3B',
        secondary: '#f0f0f0',
        accent: '#455A64',
        error: '#FF5252',
        info: '#00E676',
        success: '#B0BEC5',
        warning: '#FFC107',
        bordes: '#b5b5b5'
      },
    },
  },
  icons: {
    iconfont: 'md'
  },
});