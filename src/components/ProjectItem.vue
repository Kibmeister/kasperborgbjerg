<template>
  <div class="item" >
    <img :src="require(`@/assets/${url}`)" alt="ItemPNG" />
    <p class="subtitle">{{subtitle}}</p>
  </div>
</template>
<script>



export default {
  name: "ProjectItem",
  props: {
    id: String,
    subtitle: String,
    url: String
  }
};
</script>

<style scoped lang="scss">
.item {
  position: relative;
  max-width: 100px;
  max-height: 100px;
  margin: 5px 10px 5px 10px;
  &:hover {
    background-color: #a9a9a9;
    cursor: url('https://i.imgur.com/m5J1hiZ.png') 15 15, auto;
    //box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
}
.subtitle {
  margin-top: -5px;
  color: black;
  font: bold 12px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
}
</style>