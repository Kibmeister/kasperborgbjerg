<template>
  <div id="app">
    <Header msg="KASPER BORGBJERG" />
    <router-view />
  </div>
</template>
<!-- capture the emmit from toggle clippyWindow and do something with it-->
<script>
export default {
  
}
</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 16px;
  margin-left: -10px;
  margin-right: -10px;
}
</style>
