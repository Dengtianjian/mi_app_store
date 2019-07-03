<style lang="less" scoped>

</style>

<template>
  <div id="fulltab_pane_com" class="fulltab_pane" v-if="isShow">
    <slot />
  </div>
</template>

<script>
export default {
  name:"FullTabPane",
  props:['title','idkey'],
  data(){
    return {
      isShow:false
    }
  }
}
</script>


