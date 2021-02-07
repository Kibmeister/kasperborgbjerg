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
      <div class="intro">
        {{ content.intro }}
      </div>
      <h4 id="id_imgTitle">Our awesome belt</h4>
      <img src="https://i.imgur.com/YnyAQe8.png" title="source: imgur.com" id="id_img_1" />
      <div class="componentsList">
        <h4>Components list</h4>
        <ul>
          <li>Belt buckle (3DPrint PETG)</li>
          <li>Battery housing (3DPrint PETG)</li>
          <li>3.7V 1200mAh LiPo battery</li>
          <li>Nema17 Stepper Motor</li>
          <li>FSR sensor</li>
          <li>Custom PCB board</li>
          <li>Crystal, 16 MHz</li>
          <li>EasyDriver A3967</li>
          <li>Cheramic Capacitors, 220 μf</li>
          <li>Green LED</li>
          <li>Red LED</li>
          <li>2x Resistor, 220 Ω</li>
          <li>Resistor, 2000 Ω</li>
          <li>Resistor, 10000 Ω</li>
          <li>Momentary button</li>
          <li>Fabric belt</li>
        </ul>
      </div>

      <div class="video">
        <h4>{{ content.videoTitle }}</h4>
        <vimeo-player
          :video-id="this.content.videoID"
          :player-height="300"
          :player-width="200"
        ></vimeo-player>
      </div>
      <div class="videoDescription">
        This demo is proof that our project is doable, designing and developing a self adjusting
        belt. And keep in mind, this is a proof of concept project, no commercial thoughts behind.
      </div>

      
      <div class="prototypeDesign first">
        <h5>What we have buildt</h5>
        The prototype consist of a bigger main box that serves as the belt buckle, housing all of
        the electronics, except from the mobile battery that supplies the circuit. From the outside,
        the top surface holds the button for switching the direction of the stepper motor. This
        capability is necessary for the design, as it functions as our locking mechanism. we
        discussed different mechanisms for locking the belt in, but landed on the one mentioned
        above as it was the simplest solution that demanded the least space. On each side of the
        button you find two LED’s, one red and one green, indicating if the belt spools in or out.
      </div>

      <div class="prototypeDesign second">
        On the side of the box facing outwards, you find the force sensitive resistor (FSR), that
        functions as the activator for the motor inside the belt buckle. The analogue values from
        the sensor is mapped to two different speeds, that turns the motor. The user then has the
        possibility of running the motor in two different speeds as it might me suitable for the
        situation at hand. Inside of the buckle, there are three hardware components, the PCB with
        the microchip mounted on, the stepper motor itself, and the driver board for the motor.
      </div>

      <div class="prototypeDesign third">
        The motor is tightly secured by two opposing walls, as well as a notched wall on the top,
        hindering it in moving vertical. The main gear is mounted on the stepper motors axle,
        vertically, and held securely by a wheel baring on the opposing side, enabling steady
        rotation of the gear. Parallel to the main gear, there is a second gear mounted to two wheel
        barrings, one below and one above the gear. The two gears have a similar additional outer
        gear on their top side, which interconnects, making the second gears rotation fully
        dependent on the main gears rotation.
      </div>

      <div class="prototypeDesign fourth">
        Between the two gears there is a 2mm gap, where the belt itself is feed through. The gap is
        tighter than the belt itself, and therefore grabs the belt as it is feed through the opening
        and spools is further in. This leads to the two cutouts for the belt to go through, on the
        left and right side of the belt buckle. These cutouts are aligned, so the belt is spooled
        through on a parallel path as where the two gears are mounted on the inside of the box.
      </div>

      <div class="prototypeDesign fifth">
        On the inside of the box, there is a second compartment, located in between the outer wall
        and a partition wall north of the main gear. This compartment is reserved for housing the
        PCB board and the driver board. At last, there is a cutout on the left upper corner of the
        wall, where the start tip of the belt is mounted on.
      </div>
      <div class="prototypeDesign sixth">
        <h5>PCB backside</h5> 
        <img src="https://i.imgur.com/teLosWG.png?1" id="id_backSideIMG" />
      </div>

      <div class="exploaded">
        <h5>Exploaded 3D model</h5>
        <img src="https://i.imgur.com/cLmFguD.png" id="id_exploadedIMG" />
      </div>
      <div class="pcb">
        <h5>PCB with components</h5>
        <img src="https://i.imgur.com/9JA5d8V.png" />
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
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, minMax(230px, 1fr));
  grid-template-rows: 50px 1fr 50px 1fr 1fr;
  gap: 20px 20px;
  text-align: left;

  .intro {
    grid-column: 1/2;
    grid-row: 2/3;
    place-self: center;
  }
  #id_imgTitle {
    grid-column: 3/4;
    grid-row: 1/2;
    justify-self: center;
    align-self: top;
    padding-bottom: 10px;
  }
  #id_img_1 {
    grid-column: 2/5;
    grid-row: 2/3;
    place-self: center;
    overflow: hidden;
  }
  .componentsList {
    grid-column: 5/6;
    grid-row: 2/3;
    text-align: center;
    place-self: start start;
    ul {
      list-style-type: none;
      text-align: left;
    }
    ul > li:before {
      content: '-';
      position: absolute;
      margin-left: -1.1em;
    }
  }
  .video {
    grid-column: 1/2;
    grid-row: 4/5;
    place-self: start center;
    h4 {
      margin-top: 0;
    }
  }
  .videoDescription {
    place-self: center start;
    grid-column: 2/3;
    grid-row: 4/5;
    
  }
  .prototypeDesign.first {
    grid-column: 3/4;
    grid-row: 4/5;
    h5 {
      margin-bottom: 10px;
      margin-top: 0;
    }

  }
  .prototypeDesign.second {
    grid-column: 4/5;
    grid-row: 4/5;
  }
  .prototypeDesign.third {
    grid-column: 5/6;
    grid-row: 4/5;
  }
  .prototypeDesign.fourth {
    grid-column: 1/2;
    grid-row: 5/6;
  }
  .prototypeDesign.fifth {
    grid-column: 2/3;
    grid-row: 5/6;
  }
  .prototypeDesign.sixth {
    grid-column: 5/6;
    grid-row: 5/6;
    justify-self: center;
    align-self: start;
    h5 {
      text-align: center;
      margin-top: 0;
    }     
  }

  .exploaded {
    grid-column: 3/4;
    grid-row: 5/6;
    justify-self: center;
    h5 {
      text-align: center;
      margin-top: 0;
    }
  }
  .pcb {
    grid-column: 4/5;
    grid-row: 5/6;
    justify-self: center;
    h5 {
      text-align: center;
      margin-top: 0;
    }
  }
}
</style>
