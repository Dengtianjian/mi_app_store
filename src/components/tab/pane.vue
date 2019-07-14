<style scoped>
.pane {
  width:100vw;
}

</style>

<template>
  <div class="pane" >
    <div class="srcoll_view pane_content" v-show="isShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:["name","idkey"],
  mounted(){
    this.$parent.init();
  },
  data(){
    return {
      isShow:false
    }
  }
}
</script>


