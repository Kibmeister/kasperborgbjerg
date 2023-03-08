<template>
  <div class="home" ref="home">
    <DeskItem
      ref="aboutMe"
      :url="this.$store.state.descItems[0].url"
      :subtitle="this.$store.state.descItems[0].subtitle"
      style="top: 50px; left: 40px "
      v-on:click.native="showWindow('id_aboutMe')"
    ></DeskItem>

    <DeskItem
      ref="projects"
      :url="this.$store.state.descItems[1].url"
      :subtitle="this.$store.state.descItems[1].subtitle"
      style="top: 160px; left: 40px "
      v-on:click.native="showWindow('id_projects')"
    ></DeskItem>
    <transition name="window">
      <ItemWindow
        ref="aboutMeWindow"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[0].id)"
        :id="this.$store.state.w.windowItems[0].id"
        :zIndex="this.$store.state.w.windowItems[0].zIndex"
        :header="this.$store.state.w.windowItems[0].header"
        :intro="this.$store.state.w.windowItems[0].intro"
        :width="this.$store.state.w.windowItems[0].width"
        :height="this.$store.state.w.windowItems[0].height"
      ></ItemWindow>
    </transition>

    <transition name="window">
      <ProjectsWindow
        ref="projectsWindow"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[1].id)"
        :id="this.$store.state.w.windowItems[1].id"
        :zIndex="this.$store.state.w.windowItems[1].zIndex"
        :header="this.$store.state.w.windowItems[1].header"
        :width="this.$store.state.w.windowItems[1].width"
        :height="this.$store.state.w.windowItems[1].height"
      ></ProjectsWindow>
    </transition>

    <transition name="window">
      <ItemWindowClippy
        ref="clippyWindow"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[2].id)"
        :id="this.$store.state.w.windowItems[2].id"
        :header="this.$store.state.w.windowItems[2].header"
        :intro="this.$store.state.w.windowItems[2].intro"
      ></ItemWindowClippy>
    </transition>

    <transition name="window">
      <Topico_W
        ref="topico"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[3].id)"
        :content="{
          header: this.$store.state.w.windowItems[3].header,
          title: this.$store.state.w.windowItems[3].title,
          intro: this.$store.state.w.windowItems[3].intro,
          videoID: this.$store.state.w.windowItems[3].videoID,
          videoTitle: this.$store.state.w.windowItems[3].videoTitle,
          videoDescription: this.$store.state.w.windowItems[3].videoDescription
        }"
        :width="this.$store.state.w.windowItems[3].width"
        :height="this.$store.state.w.windowItems[3].height"
        :id="this.$store.state.w.windowItems[3].id"
        :zIndex="this.$store.state.w.windowItems[3].zIndex"
        :contentColor="this.$store.state.w.windowItems[3].contentColor"
      ></Topico_W>
    </transition>

    <transition name="window">
      <SmartBelt_W
        ref="smartBelt"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[4].id)"
        :content="{
          header: this.$store.state.w.windowItems[4].header,
          title: this.$store.state.w.windowItems[4].title,
          intro: this.$store.state.w.windowItems[4].intro,
          videoID: this.$store.state.w.windowItems[4].videoID,
          videoDescription: this.$store.state.w.windowItems[4].videoDescription,
          videoTitle: this.$store.state.w.windowItems[4].videoTitle
        }"
        :width="this.$store.state.w.windowItems[4].width"
        :height="this.$store.state.w.windowItems[4].height"
        :id="this.$store.state.w.windowItems[4].id"
        :zIndex="this.$store.state.w.windowItems[4].zIndex"
        :contentColor="this.$store.state.w.windowItems[4].contentColor"
      ></SmartBelt_W>
    </transition>

    <transition name="window">
      <Cleaver_W
        ref="cleaver"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[5].id)"
        :content="{
          header: this.$store.state.w.windowItems[5].header,
          title: this.$store.state.w.windowItems[5].title,
          intro: this.$store.state.w.windowItems[5].intro,
          videoID: this.$store.state.w.windowItems[3].videoID,
          videoDescription: this.$store.state.w.windowItems[3].videoDescription
        }"
        :width="this.$store.state.w.windowItems[5].width"
        :height="this.$store.state.w.windowItems[5].height"
        :id="this.$store.state.w.windowItems[5].id"
        :zIndex="this.$store.state.w.windowItems[5].zIndex"
        :contentColor="this.$store.state.w.windowItems[5].contentColor"
      ></Cleaver_W>
    </transition>

    <transition name="window">
      <CoffeeCan_W
        ref="coffeecan"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[6].id)"
        :content="{
          header: this.$store.state.w.windowItems[6].header,
          title: this.$store.state.w.windowItems[6].title,
          intro: this.$store.state.w.windowItems[6].intro,
          videoID: this.$store.state.w.windowItems[6].videoID,
          videoDescription: this.$store.state.w.windowItems[6].videoDescription
        }"
        :width="this.$store.state.w.windowItems[6].width"
        :height="this.$store.state.w.windowItems[6].height"
        :id="this.$store.state.w.windowItems[6].id"
        :zIndex="this.$store.state.w.windowItems[6].zIndex"
        :contentColor="this.$store.state.w.windowItems[6].contentColor"
      ></CoffeeCan_W>
    </transition>

    <transition name="window">
      <Coaxer_W
        ref="coaxer"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[7].id)"
        :content="{
          header: this.$store.state.w.windowItems[7].header,
          title: this.$store.state.w.windowItems[7].title,
          intro: this.$store.state.w.windowItems[7].intro,
          videoID: this.$store.state.w.windowItems[7].videoID,
          videoDescription: this.$store.state.w.windowItems[7].videoDescription
        }"
        :width="this.$store.state.w.windowItems[7].width"
        :height="this.$store.state.w.windowItems[7].height"
        :id="this.$store.state.w.windowItems[7].id"
        :zIndex="this.$store.state.w.windowItems[7].zIndex"
        :contentColor="this.$store.state.w.windowItems[7].contentColor"
      ></Coaxer_W>
    </transition>
     
     <transition name="window">
      <RingmerkingNO_W
        ref="ringmerkingNO"
        v-if="this.$store.getters.windowVisibility(this.$store.state.w.windowItems[8].id)"
        :content="{
          header: this.$store.state.w.windowItems[8].header,
          title: this.$store.state.w.windowItems[8].title,
          intro: this.$store.state.w.windowItems[8].intro,
          videoID: this.$store.state.w.windowItems[8].videoID,
          videoDescription: this.$store.state.w.windowItems[8].videoDescription
        }"
        :width="this.$store.state.w.windowItems[8].width"
        :height="this.$store.state.w.windowItems[8].height"
        :id="this.$store.state.w.windowItems[8].id"
        :zIndex="this.$store.state.w.windowItems[8].zIndex"
        :contentColor="this.$store.state.w.windowItems[8].contentColor"
      ></RingmerkingNO_W>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return { mediaSize: 'mediaSize' };
  },
  methods: {
    homeWidthAndHeight() {
      let body = {
        width: this.$refs.home.clientWidth,
        height: this.$refs.home.clientHeight
      };
      this.$store.commit('setBodyMeasures', body);

      window.addEventListener('resize', () => {
        console.log('the resize method is called ');
        let body = {
          width: this.$refs.home.clientWidth,
          height: this.$refs.home.clientHeight
        };
        this.$store.commit('setBodyMeasures', body);
      });
    },
    showWindow(id) {
      this.zIndexToggle(id);
      this.$store.commit('showWindow', id);
    },
    zIndexToggle(id) {
      // console.log('this window is toggeled : ' + this.id)
      this.$store.commit('setGlobalZindex', id);
    }
  },
  mounted() {
    this.homeWidthAndHeight();
  }
};
</script>

.
<style scoped lang="scss">
@import '@/scss/transitions';
.home {
  margin: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #eafcf2;
}
</style>
