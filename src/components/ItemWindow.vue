<template>
  <div
    ref="draggableContainer"
    id="resizable"
    class="draggableContainer"
    v-bind:style="{
      zIndex: zIndex
    }"
    @mousedown="zIndexToggle"
  >
    <div class="draggableHeader" @mousedown="dragMouseDown">
      <div class="draggable-header-text">{{ header }}</div>
      <div class="title-bar-controls" @mousedown.stop>
        <Button aria-label="Minimize" @click="windowState('minimize')"></Button>
        <Button aria-label="Maximize" @click="windowState('maximize')"></Button>
        <Button aria-label="Close" v-on:click="hideContainer"></Button>
      </div>
    </div>
    <div ref="content" class="content">{{ intro }}</div>
  </div>
</template>

<script>
import {windowScript} from '../mixins/windowScript'
export default {
  name: 'ItemWindow',
  props: {
    header: String,
    intro: String,
    zIndex: Number,
    id: String,
    width: Number,
    height: Number
  },
  data: function() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
        offset: {
          x: 0,
          y: 0
        },
        dragoffset: {
          x: 0,
          y: 0
        }
      },
      isActive: true
    };
  },
  mixins: [windowScript]
};
</script>

<style lang="scss" scoped>

@import '@/scss/variables';
@import '@/scss/draggableContainer';

  .content {
    position: relative;
    text-align: left;
    padding: 10px;
    padding-top: 25px;
    
  }

</style>
