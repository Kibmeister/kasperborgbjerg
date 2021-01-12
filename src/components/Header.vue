<template>
  <div class="header" ref="header">
    <router-link to="/">{{ msg }}</router-link>

    <div class="headerIcons">
      <div id="id_clippy" @click="showWindow('id_clippy')">
        <img src="https://i.imgur.com/uRa1sIM.png" />
      </div>
      <div @click="redirect">
        <img id="id_linkedInIcon" src="../assets/linkedInBW.png" alt="linkedIn-icon" />
      </div>
      <div id="id_windowsIcon">
        <img src="../assets/windowsicon.png" alt="windows-icon" />
      </div>
    </div>
    <Clock></Clock>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    redirect() {
      window.location.href = 'https://www.linkedin.com/in/kasperborgbjerg';
    },
    showWindow(id) {
      this.$store.commit('showWindow', id);
      this.$emit('toggleProjectsItemWindow', id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  border-bottom-style: solid;
  border-bottom-color: black;
  border-bottom-width: 1px;
  width: 100%;
  height: 30px;
  max-height: 30px;
  margin: 0;
  background: white;
  border-bottom: 2px solid #000;
  display: flex;
}

.headerIcons {
  position: absolute;
  right: 1vw;
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  margin-right: 5px;

  #id_windowsIcon {
    order: 3;
    margin-top: 3px;
    margin: 3px -10px 0px;
  }
  #id_linkedInIcon {
    order: 2;
    cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
    animation-name: spinning;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 5000ms;
    margin: 0px -10px 0px;
    box-sizing: border-box;
  }
  #id_clippy {
    order: 1;
    transform: scale(0.3, 0.3);
    cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
    margin: -30px -10px 0px;
    box-sizing: border-box;
  }
}

@keyframes spinning {
  0% {
    transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
    -moz-transform: rotateY(360deg);
    -ms-transform: rotateY(360deg);
  }
}
@-webkit-keyframes spinning {
  0% {
    -webkit-transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
  }
}
a {
  position: absolute;
  right: 50%;
  margin-right: -86px;
  margin-top: 0.5vh;
  font: bold 16px 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
  text-decoration: none;
  color: black;
  cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
}
</style>
