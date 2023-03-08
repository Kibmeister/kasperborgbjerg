<template name="expMini">
  <transition>
    <div
      ref="draggableContainer"
      id="resizable"
      class="draggableContainer"
      :class="expand"
      v-bind:style="{
        zIndex: zIndex,
        'background-color': contentColor,
      }"
      @mousedown="zIndexToggle"
    >
      <div class="draggableHeader" @mousedown="dragMouseDown">
        <div class="draggable-header-text">{{ content.header }}</div>
        <div class="title-bar-controls" @mousedown.stop>
          <Button
            aria-label="Minimize"
            @click="windowState('minimize')"
          ></Button>
          <Button
            aria-label="Maximize"
            @click="windowState('maximize')"
          ></Button>
          <Button aria-label="Close" @click="hideContainer"></Button>
        </div>
      </div>

      <div class="content">
        <div class="democontainer">
          <form
            action="https://www.figma.com/proto/luE2AxlVtZQhwBOWhaOBWJ/Final-design-sprint---Kantega?page-id=0%3A1&node-id=1-16074&viewport=696%2C112%2C0.12&scaling=scale-down&starting-point-node-id=1%3A16074"
            target="_blank"
          >
            <Button id="id_demo">Demo</Button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { windowScript } from '../mixins/windowScript';
export default {
  name: 'ProjectsItemWindow',
  props: {
    content: {
      type: Object,
      header: { type: String, requierd: true },
      title: { type: String, requierd: true },
      intro: { type: String, requierd: true },
      videoID: { type: String, requierd: true },
      videoTitle: { type: String, requierd: true },
      videoDescription: { type: String, requierd: true },
    },
    zIndex: Number,
    id: String,
    contentColor: String,
    width: Number,
    height: Number,
  },
  mixins: [windowScript],
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';
@import '@/scss/draggableContainer';
@import '@/scss/buttons';
.header {
  margin-top: 30px;
}
#id_demo {
  cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
}
.democontainer {
  position: relative;
  width: inherit;
  padding: 5px;
  margin-top: 3vh;
  margin-bottom: 0;
  background-color: #f0eadb;

  #btn_demo {
    display: absolute;
  }
}
.content {
  background-image: url('../assets/svg/background/ringmerkingFigma.svg');
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  margin-top: 2vh;
}
</style>
