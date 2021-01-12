<template>
  <div>
           <button v-show="!this.agent" @click="loadClippy()">Load Clippy</button>
            <button v-show="this.agent" @click="show()">Show</button>
            <button v-show="this.agent" @click="hide()">Hide</button>
            <button v-show="this.agent" @click="play()">Play</button>
            <button v-show="this.agent" @click="animate()">Animate</button>
            <button v-show="this.agent" @click="destroy()">Destroy</button>
  </div>
</template>
<!--  THIS ANGENT IS NOT USED -->
<script>
import 'clippyjs';
export default {
  props: {
    name: {
      type: String,
      default: 'Clippy'
    }
  },
  data() {
    return {
      agent: null
    };
  },
  methods: {
    loadClippy: function() {
      clippy.load(this.name, (agent) => {
        this.agent = agent;
      });
    },
    show: function() {
      this.agent && this.agent.show();
    },
    hide: function() {
      this.agent && this.agent.hide();
    },
    play: function() {
      this.agent && this.agent.play('Searching');
    },
    animate: function() {
      this.agent.animate();
    },
    destroy: function() {
      this.agent._el.remove(); // this.agent._el is the JQuery object binds to the Dom of Agent
      this.agent = null;
    }
  },
  mounted: function() {
    this.loadClippy();
  }
};
</script>

<style scoped lang="scss">
div {
  transform: scale(0.6);
  position: relative;
  margin-left: 100px;
}
</style>
