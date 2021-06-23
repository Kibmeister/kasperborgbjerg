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
        <!-- <img src="../assets/svg/background/Coaxer.jpg" width="1920" height="1080" > -->
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
.content {
  background-image: url('../assets/svg/background/Coaxer-01.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  margin-top: 2vh;
  margin-bottom: 8vh;
}
</style>
