<template>
  <div
    ref="container"
    class="container"
  >
    <div class="header">
      {{ header }}
    </div>
    <div class="content">
      <p>
        {{ intro }}
      </p>
    </div>
    <Button v-on:click="hideContainer">That's alright</Button>

    <!--<a href="#" class="close" v-on:click="hideContainer">That's alright</a> -->
  </div>
</template>

<script>
export default {
  name: 'ItemWindowClippy',
  props: {
    header: String,
    intro: String,
    id: String
  },
  methods: {
    hideContainer() {
      this.$store.commit('hideWindow', this.id);
      this.toggleVisibility();
    },
    toggleVisibility() {
      this.isActive = this.$store.getters.windowVisibility(this.id);
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
        switch(mutation.type) {
          case 'showWindow':
           this.toggleVisibility();
          break;
        } 
     })
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';
@import '@/scss/draggableContainer';
@import '@/scss/buttons';
//TODO:re position the div to align with the clippy icon 
.container {
  position: absolute;
  width: 250px;
  height: 200px;
  border: black solid 1px;
  background-color: #fbfbef;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.29);
  padding: 5px;
  top: 30px;
  right: 35px;
  z-index: 9999;
  .header {
    font: bold 14px 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
    text-align: center;
  }
  p {
    text-align: left;
  }
  .content {
    margin-top: 10px;
    padding: 10px;
  }
  button {
    font-size: 12px;
    padding: 5px;
    cursor: url('https://i.imgur.com/m5J1hiZ.png'), auto;
  }
}
// This is the triange arrow pointing to the clippy icon
.container:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: 199px;
  top: -23px;
  border: 12px solid;
  border-color: transparent black  black  transparent ;
}
.container:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: 200px;
  top: -21px;
  border: 11px solid;
  border-color:transparent #fbfbef #fbfbef  transparent    ;
}
</style>
