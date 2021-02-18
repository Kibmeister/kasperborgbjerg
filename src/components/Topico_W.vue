<template>
  <div
    ref="draggableContainer"
    id="resizable"
    class="draggableContainer"
    v-bind:style="{
      zIndex: zIndex,
      'background-color': contentColor,
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
      <div class="mediaBox">
        <h5>What is topico</h5>
        <p>
          Topico is an online dictionary for the individual classes to use. It
          is aimed for the pupils in a sixth grade English class, designed on
          the basis of observations and empiricaldata that we have gathered and
          analyzed. It is used to store verbal descriptions of relevant words
          and topics learned in class in audio files. This project fits in the
          category of EduTech, which covers the study and ethical practice of
          facilitating learning and improving performance by creating, using and
          managing appropriate technological processes and resources
        </p>
      </div>
      <div class="mediaBox">
        <h5>Brief demo</h5>
        <vimeo-player
          :video-id="this.content.videoID"
          :player-height="300"
          :player-width="200"
        ></vimeo-player>
      </div>
      <div class="mediaBox">
        <h5>How it works</h5>
        <p>
          The game works as following. Four pupils sits around the device. Then
          they push the main button on the top of the device, which makes four
          different words appear, where they only can see one word each. These
          are the main words. They all have three corresponding help words,
          which is related to the meaning of the main word. Then they push the
          button again, and the device will choose one of those four words. The
          pupil that the word is displayed for, will be instructed to explain
          that. When they press the button again, there will appear a help word,
          connected to the chosen word, on the three other screens.
        </p>
      </div>
      <div class="mediaBox">
        <h5></h5>
        <p>
          Help words will appear one at a time, to secure that they can discuss
          and connect it to the chosen word. After this is done, they can press
          the button again, to record the explanation of the word. When this is
          done, the explanation is stored on the website, where they can find it
          connected to the chosen word. From the teacher’s perspective, we
          learned that she has had some quite struggling experiences with new
          technology, so we have made our website it in a way, where she only
          redefines the main words and help words.
        </p>
      </div>
      <div class="mediaBox">
        <GroupSVG class="svg"></GroupSVG>
        <h5>Interaction with four students</h5>
      </div>
      <div class="mediaBox">
        <IlluSVG class="svg"></IlluSVG>
        <h5>Device / Cloud model</h5>
      </div>
      <div class="mediaBox">
        <ScenarioSVG class="svg"></ScenarioSVG>
        <h5>Scenario interacion</h5>
      </div>

      <div class="mediaBox">
        <h5>Empirical data</h5>
        <p>
          From the observations we made visiting an Elementary school, sixth
          grade english class, we got different views on the pupils and their
          work methods. We wrote notes about how they acted and used the English
          language compared to the Danish. We also saw, how they cooperated with
          each other and how they helped each other. Furthermore, we saw how the
          the pupil’s relation with the teacher was like. Information was gained
          with the methods from Ethnographic field methods, Guiding Principles
          of Ethnography(NaturalSettings). We also had small conversations and
          semi-structured interviews with the teacher and pupils which gave an
          insight in their daily work and activities.
        </p>
      </div>
      <div class="mediaBox">
        <h5>Concept</h5>
        <p>
          It is the pupils themselves, who records these audio files. The game
          is suppose to encourage the pupils, to collaborate with their
          classmates, to make the most substantial description of every word,
          that they receive. The goal for this game, is not to make a flawless
          sentence, without any grammatical mistakes. It is suppose to make you
          practice your verbal skills, to gain experience in explaining specific
          things. It is equal to what is expected of you in the demands from the
          ministry in Denmark. From our collection of empirical data, we have
          learned that they use their native language more frequently, when
          discussing the meaning of words.
        </p>
      </div>
      <div class="mediaBox">
        <h5></h5>
        <p>
          It is hard to control, whether the pupils speak Danish or English,
          when the teacher is not nearby. It gave them an advantage of a common
          understanding, when they discuss the words.
        </p>
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
.header {
  margin-top: 5vh;
  text-align: center;
}
.content {
  display: grid;
  grid-template-columns: repeat(4, minMax(17rem, 1fr));
  grid-template-rows: repeat(auto-fit, minMax(17rem, 1fr));
  gap: 2rem 2rem;
  padding: 0rem 2rem;
  padding-bottom: 5rem;

  .mediaBox {
    display: flex;
    flex-direction: column;

    .svg {
      max-height: 50vh;
      max-width: 50vw;
      transition: transform 1000ms;
      &:hover {
        transform: translateY(-5px);
      }
    }
    p {
      text-align: left;
    }
    img {
      align-self: center;
      width: 16rem;
      height: 25rem;
      padding-top: 2rem;
    }
    &:nth-of-type(4) {
      p {
        padding-top: 15px;
      }
    }
    &:nth-of-type(5) {
      //svg 1
      grid-row: 2/3;
    }
    &:nth-of-type(6) {
      //svg 2
      grid-row: 2/3;
    }
    &:nth-of-type(7) {
      //svg 3
      grid-row: 2/3;
      grid-column: 3/5;
    }
    &:nth-of-type(8) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    &:nth-of-type(9) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    &:nth-of-type(10) {
      padding-top: 15px;
      grid-row: 3/4;
    }
  }
}
</style>
