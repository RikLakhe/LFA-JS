<template>
<div>
  <h1>About us</h1>

    
    <person></person>
</div>
</template>

<script>
import Person from './Person.vue';
export default {
  data(){
      return{
          persons:[
        'Positive shisir shrestha',
        'sagun raj lage'
      ]
      }
  },
  components:{
      'person':Person
  }
}
</script>

<style>
ul li{
    color:blue;
}
</style>
