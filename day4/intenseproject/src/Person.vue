<template>
<div>
  <h1>Person</h1>
  <ul>
      <li v-for="p in persons" :key="p.id">{{p}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  data(){
      return{
          persons:[
        'Positive shisir shrestha',
        'sagun raj lage'
      ]
      }
  }
}
</script>