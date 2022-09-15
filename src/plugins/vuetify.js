import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);
// subscreve a cor padrão do vuetify
new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
      },
    },
  },
});

export default new Vuetify({});
