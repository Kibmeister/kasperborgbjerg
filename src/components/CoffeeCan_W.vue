<template>
  <transition>
    <div
      ref="draggableContainer"
      id="resizable"
      class="draggableContainer"
      :class="expand"
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
          <Button aria-label="Close" @click="hideContainer"></Button>
        </div>
      </div>
      <div class="header">
        <h3>{{ content.title }}</h3>
      </div>
      <div class="content">
        <div class="coffeecan">
          <h5>Intro</h5>
          This is a prototype of a multimodal coffee can, that is designed to assist and aid the visually impaired. Coffee can be poured, just as with a regular coffee can, though here it is implemented vibrotactile and auditory feedback to further exploit the perception capacity available for user. Thus, the theme for this project is multimodal interaction, which is how systems can be designed to utilize input and output through different channels of perception, available for the user.  
        </div>
        <div class="coffeecan">
          <vimeo-player
            :video-id="this.content.videoID"
            :player-height="300"
            :player-width="500"
          ></vimeo-player>
        </div>
        <div class="coffeecan">
          <h5>Prototype goal</h5>
          By heightening the level of tactile and auditory feedback, the goal was to see if it is possible for visually impaired people to make fewer errors when pouring, as well as shortening the pouring time. Also, how will the user make sense of the feedback when exposed to it, will the assessment of the emitted feedback be significant enough to be higher regarded than their own practiced techniques, or will it be complementary. 
        </div>

        <div class="coffeecan ">
          <h5>Feedback Design</h5>
          The feedback design chosen, was based on the parameters of giving instant feedback of the user’s actions with the device.
          <ul>
            <li>Grabbing the handle and receive feedback upon amount (tactile and auditory feedback) </li>
            <br>
            <li>Pouring from the coffee can (tactile feedback) </li>
            <br>
            <li>Confirmation of the cup successfully poured (tactile and auditory feedback) </li>
            <br>
            <li>Confimarion that the temperature has the appropriate drinking temperature (auditory feedback)</li>

          </ul>
        </div>

        <div class="coffeecan" lang="img">
          <img src="https://i.imgur.com/pBsWezs.png" />
          <h5>Feedback Model</h5>
        </div>

        <div class="coffeecan ">
          <h5>.</h5>
          The model to the left depicts the two different forms of feedback, and in what scenario these are used. Tactons are structured tactile messages for non-visual information display, that are used to inform the user through output of vibrotactile waves. Tactons are based on frequency, amplitude, waveform and rhythm as main parameters. In conjunction with tactons, the can emitts earcons through several of the sequences of interaction. Earcons are here used as in parallel with tactons. Earcons are the equivalent to tactons just on the auditory modality, and in this design presented in a concurrently manner. 
        </div>
        <div class="coffeecan ">
          On the inside of the 3D printed handle, four coin vibration motors are glued to a ninja flex material which fits through the cut outs in the handle. On the other side of the handle, a photoresistor is mounted, to detect if the handle is grabbed. Using PWM (pulse width modulation), the analogue motors are controlled through the waveform signals where a higher PWM signal is equal to a higher voltage, which results in a higher vibration amplitude and frequency.
        </div>
        <div class="coffeecan " lang="img">
          <img src="https://i.imgur.com/wiJiSdN.jpg?1" />
          <h5>Handle</h5>
        </div>
        <div class="coffeecan ">
          <h5>Components list</h5>
          <ul>
            <li>Coffee can top (3DPrint PETG)</li>
            <li>Handle (3DPrint PETG)</li>
            <li>Water-flow-sensor YF-s201</li>
            <li>LDR Photoresistor</li>
            <li>4 x Coin Vibration Motor</li>
            <li>Waterproof Temperature Sensor DS18B20</li>
            <li>DF Player</li>
            <li>Small speaker</li>
            <li>Arduino Uno</li>
          </ul>
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
@import '@/scss/buttons';
.header {
  margin-top: 5vh;
}
#id_demo {
  cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
}
.content {
  display: grid;
  margin-bottom: 5vh;
  grid-template-columns: repeat(4, minMax(17rem, 1fr));
  grid-template-rows: minMax(22rem, 22rem) minMax(26rem, 28rem) minMax(22rem, 22rem);
  grid-template-areas:
    'tile1 video video tile4'
    'tile5 feedbackDesign feedbackDesign tile8'
    'tile9 handle handle tile12';
  gap: 10px 20px;
  // justify-content: space-around;
  // justify-items: center;
  padding: 10px;
  text-align: left;

  .coffeecan {
    padding: 0.5rem;

    &:lang(img) {
      transition: transform 1000ms;
      h5 {
        align-self: center;
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
    img {
      align-self: center;
      width: 35rem;
      height: 16rem;
      margin-top: 4rem;
    }
    h5 {
      text-align: center;
    }
    ul {
        list-style-type: none;
        text-align: left;
      }
      ul > li:before {
        content: '-';
        position: absolute;
        margin-left: -1.1em;
      }

    &:nth-of-type(1) {
      grid-area: tile1;
    }
    &:nth-of-type(2) {
      place-self: center;
      grid-area: video;
      margin-top: 4rem;
    }
    &:nth-of-type(3) {
      grid-area: tile4;
    }
    &:nth-of-type(4) {
      grid-area: tile5;
    }
    &:nth-of-type(5) {
      place-self: center;
      align-self: start;
      grid-area: feedbackDesign;
      h5 {
        margin-top: 0%;
        color: gainsboro;
      }
    }
    &:nth-of-type(6) {
      grid-area: tile8;
    }
    &:nth-of-type(7) {
      place-self: center;
      grid-area: tile9;
    }
    &:nth-of-type(8) {
      place-self: center;
      grid-area: handle;
      h5 {
        margin-top: 0%;
        color: gainsboro;
      }
     
    }
    &:nth-of-type(9) {
      grid-area: tile12;
    }
  }
}
</style>
