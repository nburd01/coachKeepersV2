import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
  faTwitch,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
  faTwitch,
  faGithubSquare,
  faArrowRight
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
