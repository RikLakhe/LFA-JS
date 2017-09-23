<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/person/12">Person ID</router-link>
        
      </li>
    </ul>    
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to vue practice'
    }
  }
}
</script>

<style>

</style>
