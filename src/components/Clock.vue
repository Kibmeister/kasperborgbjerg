<template>
  <div class="clock">
    {{timenow}}
  </div>
</template>

<script >
 var moment = require("moment-timezone");
export default {
  name: "Clock",
  data: function() {
    return {timenow : ''}
  },
  methods: {
    time() {
      setInterval(() => {
        this.timenow =  moment().format("HH:mm:ss")
      }, 1000);
    }
  },
  mounted: function() {
    this.time();
    this.timenow = moment().format('HH:mm:ss')
  }
};
</script>

<style scoped lang="scss">
.clock {
  position: fixed;
  left: 0;
  font: bold 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  margin-left: 1vw;
  margin-top: 0.5vh;

}
</style>