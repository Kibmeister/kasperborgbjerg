<template name="expMini">
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
        <form
          action="https://xd.adobe.com/spec/d1e6ec4d-1ef2-4cb8-7ce7-f8172bc94489-a7d7/"
          target="_blank"
        >
          <Button id="id_demo">Demo</Button>
        </form>
      </div>
      <div class="content">
        <div class="mediaBox">
          <h5>Application goal</h5>
          <p>
            The application will enable the user to connect with other users to engagein various
            social activities together. The goal of the application is to help the users connect
            with likeminded users in activities of their choosing, whether it would be going to a
            bar, attend a sports game, or watch a movie. A central feature is the ability to connect
            users that don’t know each other prior to the social activity, matching them based on
            location and a common interest.
          </p>
        </div>
        <div class="mediaBox">
          <h5></h5>
          <p>
            We propose that users can ’host’ events, and then other users in the immediate area can
            ’sign up’ for events if they feel like meeting new people, and the proposed event
            interests them. After attendig an event or hosting it, the participants of the event
            will be displayed as acquaintance in the Connections room, where each acquaintance is
            presented as to which common event you last attended.
          </p>
        </div>
        <div class="mediaBox">
          <h5>Target user</h5>
          <p>
            The target user are younger people that are new in a city, either they are there tostay
            or just on vacation - and want to meet up with other people. Moreover, the target group
            does notexclude younger people moving from other countries. Young people, are more
            likely to travel alone to anew city, as they are more adventurous and often don’t have
            commitments back home, such as family and career compared to middleage people.
          </p>
        </div>
        <div class="mediaBox">
          <h5>Mobile features</h5>
          <p>
            We envisioned that all nearby available events should appear on the map, relative to the
            users position. Hence, location service provieded by the Android Map API is central.
            Furthermore, the possibility to follow up on event and people with common interest, the
            ability to chat and recieve notifications is vital.
          </p>
        </div>

        <div class="mediaBox" lang="img">
          <h5>Personal profile page (Frame.1)</h5>
          <img src="https://i.imgur.com/OEY3wvp.png" />
        </div>

        <div class="mediaBox" lang="img">
          <h5>Chat window (Frame.2)</h5>
          <img src="https://i.imgur.com/lrl42le.png" />
        </div>

        <div class="mediaBox" lang="img">
          <h5>Creating event (Frame.3)</h5>
          <img src="https://i.imgur.com/QJx9DaU.png" />
        </div>

        <div class="mediaBox" lang="img">
          <h5>Event appears on map (Frame.4)</h5>
          <img src="https://i.imgur.com/OdPgss4.png" />
        </div>
        <div class="mediaBox">
          <h5>Paper mock-ups</h5>
          <p>
            Our first pair of paper mock-up ('Personal profile page & Chat Window'), is going
            through the interaction where a danish girl for Aarhus, Anna, comes back to her
            hometown, and gets in contact with a former friend, Mike. In the first frame [Frame 1], Anna has
            an overview of her profile, as well as the last people she has been in contact with. She
            presses on Mike as he is the only one also located in Aarhus. The second frame [Frame 2], show a
            small profile section in the top covering general info about mike. Below that we can see
            the recent messages they have exchanged. Furthermore, it depicts Anna having sent a
            message asking Mike out for coffee the next day, and Mike have just become active,
            currently typing a response to Anna.
            <br /> <br />
            In our second mock-up [Frame 3], a man named Chris have just moved to Copenhagen from
            Stockholm, and have just set his profile up with the app. Being new in town he want to
            socialize and invite some people out on dinner. Hence, he creates an event that will be
            displayed on the map in the Happenings section of the app, that people in the nearby
            location can see and join. He has some options to specify the event, What is the event,
            For whom, At what time and the following location of the event. Completing the post he
            press the "Post" button. Following that action, the app gives him an alert dialogue,
            informing him that his post was successfully uploaded (This Frame is not included). He
            presses the "Ok" button on the alert dialogue and is the redirected to "Happenings"
            section of our app [Frame 4], where the map shows him that location of the event as well as a
            description of the event.
          </p>
        </div>

        <div class="mediaBox" lang="img">
          <h5>Personal profile page</h5>
          <img src="https://i.imgur.com/f3FD26J.png?4" />
        </div>
        <div class="mediaBox" lang="img">
          <h5>Chat window</h5>
          <img src="https://i.imgur.com/OkzAhvy.png?2" />
        </div>
        <div class="mediaBox" lang="img">
          <h5>Creating event</h5>
          <img src="https://i.imgur.com/DqtWg5y.png" />
        </div>
        <div class="mediaBox" lang="img">
          <h5>Event appears on map</h5>
          <img src="https://i.imgur.com/bixZdgt.png" />
        </div>
        <div class="mediaBox">
          <h5>Fragments HiFi prototype</h5>
          <p>
            The design from the paper mock-ups where revised and put throught different types of
            analysis such as Heuristic Evaluation and Expert Review Analysis. These methods
            eventually crafted the HiFi prototype, AdobeXD that is a simple but detailed
            visualisation of what design we strived to accomplish with the Cleaver application. For
            further interest, click the link in the header above to check out the prototype.
            FYI: the name Cleaver has its origins from a typo, were the actual name should have been Clever.
          </p>
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
  margin-top: 30px;
}
#id_demo {
  cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
}
.content {
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(4, minMax(17rem, 1fr));
  grid-template-rows: repeat(auto-fit, minMax(18rem, 12rem));
  gap: 10px 10px;
  padding: 10px;

  .mediaBox {
    display: flex;
    flex-direction: column;
    &:lang(img) {
      transition: transform 1000ms;
      h5 {
        align-self: center;
        margin-bottom: 0;
      }
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
    &:nth-of-type(2) {
      p {
        padding-top: 15px;
      }
    }
    &:nth-of-type(9) {
      grid-column: span 4;
    }
    &:nth-of-type(14) {
      grid-column: span 4;
      margin-bottom: 30px;
    }
  }
}
</style>
