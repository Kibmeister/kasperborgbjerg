import Vue from 'vue';
import Vuex from 'vuex';
import windowsData from './modules/windowsData.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    descItems: [
      { id: 'id_aboutMe', url: 'document.png', subtitle: 'ABOUTME' },
      {
        id: 'id_projects',
        url: 'folder.png',
        subtitle: 'PROJECTS',
      },
      {
        id: 'id_clippy',
        url: 'clippy.png',
        subtitle: 'ASK CLIPPY',
      },
    ],
    projectsFolderItems: [
      {
        id: 'id_topico',
        url: 'favoritesFolder.png',
        subtitle: 'TOPICO',
      },
      {
        id: 'id_smartBelt',
        url: 'gemFolder.png',
        subtitle: 'SMARTBELT',
      },
      {
        id: 'id_cleaver',
        url: 'chatFolder.png',
        subtitle: 'CLEAVER',
      },
      {
        id: 'id_coffeecan',
        url: 'globe.png',
        subtitle: 'COFFEECAN',
      },
      {
        id: 'id_coaxer',
        url: 'magnifyingGlass.png',
        subtitle: 'COAXER',
      },
      {
        id: 'id_ringmerkingNO',
        url: 'mainFolder.png',
        subtitle: 'Ringmerking.no',
      },
    ],
    bodyHeight: 0,
    bodyWidth: 0,
  },
  mutations: {
    setBodyMeasures(state, body) {
      state.bodyWidth = body.width;
      state.bodyHeight = body.height;
    },
    setGlobalZindex(state, id) {
      state.w.windowItems.find((i) => i.id === id).zIndex =
        Math.max(...state.w.windowItems.map(({ zIndex }) => zIndex)) + 1;
      //                find window item with id             then set this winodw item with the currently highest zindex         and increment it
      this.commit('decreasezIndex', id);
    },
    decreasezIndex(state) {
      state.w.windowItems.forEach((i) => {
        i.zIndex--;
      });
    },
    setWindowTopLeft(state, payload) {
      state.w.windowItems.find((i) => i.id === payload.id).top = payload.top;
      state.w.windowItems.find((i) => i.id === payload.id).left = payload.left;
    },
    hideWindow(state, id) {
      state.w.windowItems.find((i) => i.id === id).visibility = false;
    },
    showWindow(state, id) {
      state.w.windowItems.find((i) => i.id === id).visibility = true;
    },
  },
  getters: {
    bodyHeight: (state) => state.bodyHeight,
    bodyWidth: (state) => state.bodyWidth,
    windowVisibility: (state) => (id) =>
      state.w.windowItems.find((i) => i.id === id).visibility,
    windowTop: (state) => (id) =>
      state.w.windowItems.find((i) => i.id === id).top,
    windowLeft: (state) => (id) =>
      state.w.windowItems.find((i) => i.id === id).left,
  },
  actions: {},
  modules: {
    w: windowsData,
  },
});
