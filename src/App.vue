<template lang="pug">
div
  the-navbar
  h1 HALOO
  h1 HALOO
  h1 HALOO
  h1 HALOO
  p {{ testing }}
  p {{ yaudalah }}
  //- <div class="red"><h1>aa</h1></div>

</template>

<script>
// import { computed } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from "./Base/TheNavbar.vue";

export default {
  components: {
    // HomePage,
    TheNavbar,
  },
  data(){
    return{
      testing: "BABI ENAK",
      testing2 : "TAPI HARAM"
    }
  },
  computed: {
    yaudalah() {
      return this.testing + " " + this.testing2;
    },
  },
}
</script>

<style>

</style>
