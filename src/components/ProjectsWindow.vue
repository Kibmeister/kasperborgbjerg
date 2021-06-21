<template>
  <div
    ref="draggableContainer"
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

    <div class="content" @click.stop="zIndexToggle">
      <ProjectItem
        ref="topico"
        :url="this.$store.state.projectsFolderItems[0].url"
        :id="this.$store.state.projectsFolderItems[0].id"
        :subtitle="this.$store.state.projectsFolderItems[0].subtitle"
        @click.native.stop="showWindow('id_topico')"
      ></ProjectItem>
      <ProjectItem
        ref="smartBelt"
        :url="this.$store.state.projectsFolderItems[1].url"
        :id="this.$store.state.projectsFolderItems[1].id"
        :subtitle="this.$store.state.projectsFolderItems[1].subtitle"
        v-on:click.native.stop="showWindow('id_smartBelt')"
      ></ProjectItem>
      <ProjectItem
        ref="cleaver"
        :url="this.$store.state.projectsFolderItems[2].url"
        :id="this.$store.state.projectsFolderItems[2].id"
        :subtitle="this.$store.state.projectsFolderItems[2].subtitle"
        v-on:click.native.stop="showWindow('id_cleaver')"
      ></ProjectItem>
       <ProjectItem
        ref="coffeecan"
        :url="this.$store.state.projectsFolderItems[3].url"
        :id="this.$store.state.projectsFolderItems[3].id"
        :subtitle="this.$store.state.projectsFolderItems[3].subtitle"
        v-on:click.native.stop="showWindow('id_coffeecan')"
      ></ProjectItem>
       <ProjectItem
        ref="coaxer"
        :url="this.$store.state.projectsFolderItems[4].url"
        :id="this.$store.state.projectsFolderItems[4].id"
        :subtitle="this.$store.state.projectsFolderItems[4].subtitle"
        v-on:click.native.stop="showWindow('id_coaxer')"
      ></ProjectItem>
    </div>
  </div>
</template>

<script>
import { windowScript } from '../mixins/windowScript';
export default {
  name: 'ProjectsWindow',
  props: {
    header: String,
    zIndex: Number,
    id: String,
    width: Number,
    height: Number 
  },
  methods: {
    showWindow(id) {
      this.$store.commit('showWindow', id);
      this.$store.commit('setGlobalZindex', id);
      
    }
  },
  mixins: [windowScript]
};
</script>

<style lang="scss" scoped>
// TODO: prevent windows form shrinking beyond less width and height
@import '@/scss/variables';
@import '@/scss/draggableContainer';
.draggableContainer{
  //min-width: 350px;
}
  .content {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
</style>
