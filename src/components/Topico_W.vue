<template>
  <div
    ref="draggableContainer"
    id="resizable"
    class="draggableContainer"
    v-bind:style="{
      zIndex: zIndex,
      'background-color': contentColor
    }"
    @mousedown="zIndexToggle"
  >
    <div class="draggableHeader" @mousedown="dragMouseDown">
      <div class="draggable-header-text">{{ content.header }}</div>
      <div class="title-bar-controls" @mousedown.stop>
        <Button aria-label="Minimize" @click="windowState('minimize')"></Button>
        <Button aria-label="Maximize" @click="windowState('maximize')"></Button>
        <Button aria-label="Close" @click.stop="hideContainer"></Button>
      </div>
    </div>

    <div class="header">
      <h3>{{ content.title }}</h3>
    </div>
    <div class="content">
      <div class="intro" v-html="content.intro"></div>
      <div class="videoContent">
        <div class="video">
          <h5>{{ content.videoTitle }}</h5>
          <vimeo-player
            :video-id="this.content.videoID"
            :player-height="300"
            :player-width="200"
          ></vimeo-player>
        </div>
        <p class="videoDescription">
          {{ content.videoDescription }}
        </p>
      </div>

      <div class="illustration">
        <img src="https://i.imgur.com/5TTsONy.png" title="source: imgur.com" />
        <p>Scenario that illustrates the protptype</p>
      </div>

      <div class="elaboration">
        <h4>How it works</h4>
        The game works as following. Four pupils sits around the device. Then they push the main
        button on the top of the device, which makes four different words appear, where they only
        can see one word each. These are the main words. They all have three corresponding help
        words, which is related to the meaning of the main word. Then they push the button again,
        and the device will choose one of those four words. The pupil that the word is displayed
        for, will be instructed to explain that. When they press the button again, there will appear
        a help word, connected to the chosen word, on the three other screens. Help words will
        appear one at a time, to secure that they can discuss and connect it to the chosen word.
        After this is done, they can press the button again, to record the explanation of the word.
        When this is done, the explanation is stored on the website, where they can find it
        connected to the chosen word. From the teachers perspective, we learned that she has had
        some quite struggling experiences with new technology, so we have made our website it in a
        way, where she only redefines the main words and help words.
        <br />
        <br />
        <h4>Empirical data</h4>
        From the observations we made visiting an Elementary school, sixth grade english class, we
        got different views on the pupils and their work methods. We wrote notes about how they
        acted and used the English language compared to the Danish. We also saw, how they cooperated
        with each other and how they helped each other. Furthermore, we saw how the the pupil’s
        relation with the teacher was like. Information was gained with the methods from
        Ethnographic field methods, Guiding Principles of Ethnography(NaturalSettings). We also had
        small conversations and semi-structured interviews with the teacher and pupils which gave an
        insight in their daily work and activities.
        <br />
        <br />
        <h4>Concept</h4>
        It is the pupils themselves, who records these audio files. The game is suppose to encourage
        the pupils, to collaborate with their classmates, to make the most substantial description
        of every word, that they receive. The goal for this game, is not to make a flawless
        sentence, without any grammatical mistakes. It is suppose to make you practice your verbal
        skills, to gain experience in explaining specific things. It is equal to what is expected of
        you in the demands from the ministry in Denmark. From our collection of empirical data, we
        have learned that they use their native language more frequently, when discussing the
        meaning of words. It is hard to control, whether the pupils speak Danish or English, when
        the teacher is not nearby. It gave them an advantage of a common understanding, when they
        discuss the words.
      </div>
    </div>
  </div>
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
      videoDescription: { type: String, requierd: true }
    },
    zIndex: Number,
    id: String,
    contentColor: String,
    width: Number,
    height: Number
  },
  mixins: [windowScript]
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables';
@import '@/scss/draggableContainer';
.header {
  margin-top: 5vh;
  text-align: center;
}
.content {
  position: relative;
  padding: 10px;
  display: grid;
  max-height: 500px;
  grid-template-columns: repeat(3, minMax(0.5fr, 1fr));
  grid-template-rows: 50px repeat(4, 1fr);
  gap: 10px 10px;
  text-align: left;
  padding: 0rem 2rem;

  .intro {
    grid-column: 1/4;
    grid-row: 2/3;
  }
  .videoContent {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    grid-column: 1/3;
    grid-row: 3/4;
  }
  .videoDescription {
    align-self: center;
    max-width: 12rem;
    
  }
  .video {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .illustration {
    position: relative;
    padding-top: 32px;
    place-self: center;
    max-width: 400px;
    grid-column: 3/4;
    grid-row: 3/4;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .elaboration {
    grid-column: 1/4;
    grid-row: 4/5;
    padding-bottom: 75px;
  }
}
</style>
