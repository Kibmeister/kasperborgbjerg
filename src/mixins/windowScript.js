import { Math, setTimeout } from 'core-js';
import { duration } from 'moment-timezone';
import { gsap } from 'gsap';

import 'jquery-ui/themes/base/resizable.css';
window.$ = window.jQuery = require('jquery');
require('jquery-ui/ui/widgets/resizable.js');

export const windowScript = {
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
      expand: ''
    };
  },
  methods: {
    zIndexToggle() {
      // console.log('this window is toggeled : ' + this.id)
      this.$store.commit('setGlobalZindex', this.id);
    },
    dragMouseDown: function(event) {
      event.preventDefault();
      this.zIndexToggle();
      console.log('dragMouseDown');

      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      this.positions.dragoffset.x = event.clientX - this.$refs.draggableContainer.offsetLeft;
      this.positions.dragoffset.y = event.clientY - this.$refs.draggableContainer.offsetTop;

      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX; // setter movementX = gamleX - nyX
      this.positions.movementY = this.positions.clientY - event.clientY; // setter movementY = gamleY - nyY
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;

      // left/right constraints
      if (event.clientX - this.positions.dragoffset.x < 0) {
        this.positions.offset.x = 0;
      } else if (
        event.clientX - this.positions.dragoffset.x + this.$refs.draggableContainer.clientWidth >
        this.$store.getters.bodyWidth
      ) {
        this.positions.offset.x =
          this.$store.getters.bodyWidth - this.$refs.draggableContainer.clientWidth;
      } else {
        this.positions.offset.x = event.clientX - this.positions.dragoffset.x;
      }
      // top/bottom constraints

      if (event.clientY - this.positions.dragoffset.y < 0) {
        this.positions.offset.y = 0;
      } else if (
        event.clientY - this.positions.dragoffset.y + this.$refs.draggableContainer.clientHeight >
        this.$store.getters.bodyHeight
      ) {
        this.positions.offset.y =
          this.$store.getters.bodyHeight - this.$refs.draggableContainer.clientHeight;
      } else {
        this.positions.offset.y = event.clientY - this.positions.dragoffset.y;
      }

      this.$refs.draggableContainer.style.top = this.positions.offset.y + 'px';
      this.$refs.draggableContainer.style.left = this.positions.offset.x + 'px';

      let payload = {
        id: this.id,
        top: this.positions.offset.y,
        left: this.positions.offset.x
      };
      this.$store.commit('setWindowTopLeft', payload);
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    hideContainer() {
      this.$store.commit('hideWindow', this.id);
    },
    windowState(type) {
      const timeline = gsap.timeline();
      let window = this.$refs.draggableContainer;
      this.zIndexToggle();
      if (type == 'maximize') {
        timeline.to(window, 0.25, {
          top: 0,
          left: 0,
          height: 100 + '%',
          width: 100 + '%'
        });
      } else {
        timeline.to(window, 0.25, {
          top: this.positions.offset.y + 'px',
          left: this.positions.offset.x + 'px',
          height: 30 + '%',
          width: 30 + '%'
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.draggableContainer.style.width = this.width + 'px';
      this.$refs.draggableContainer.style.height = this.height + 'px';
      this.$refs.draggableContainer.style.top = this.$store.getters.windowTop(this.id) + 'px';
      this.$refs.draggableContainer.style.left = this.$store.getters.windowLeft(this.id) + 'px';
      $(function() {
        $('.draggableContainer').resizable({ handles: "n, e, s, w, se, sw, nw, ne" });
      });

      setTimeout(
        () => (
          (this.positions.offset.x =
            this.$store.getters.bodyWidth - this.$refs.draggableContainer.clientWidth),
          (this.positions.offset.y =
            this.$store.getters.bodyHeight - this.$refs.draggableContainer.clientHeight)
        ),
        1000
      );
    });
  }
};
