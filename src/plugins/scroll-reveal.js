import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});