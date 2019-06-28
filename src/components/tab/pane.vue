<style scoped>

</style>

<template>
  <div class="pane" v-show="isShow" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:["name","idkey"],
  data(){
    return {
      isShow:false,
    }
  },
  mounted(){
    this.$parent.init();
  }
}
</script>


