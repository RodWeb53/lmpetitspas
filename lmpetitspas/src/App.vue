<template>
  <div id="nav">
    <header-top></header-top>
      <router-view/>
  </div>

</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'header-top': Header
  }
}
</script>


<style>
body {
  margin: 0px;
  padding: 0px;

}
</style>
