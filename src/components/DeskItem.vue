<template>
  <div class="item">
    <img :src="require(`@/assets/${url}`)" alt="ItemPNG" />
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>
<script>
export default {
  name: 'DeskItem',
  props: {
    subtitle: String,
    url: String
  }
};
</script>

<style scoped lang="scss">
.item {
  position: absolute;
  display: block;
  max-width: 100px;
  max-height: 100px;
  margin: 40px 50px 0px 40px;
  &:hover {
    background-color: #a9a9a9;
    cursor: url('https://i.imgur.com/m5J1hiZ.png'), auto;
    //box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
}
.subtitle {
  margin-top: -5px;
  color: black;
  font: bold 12px 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
}
</style>
