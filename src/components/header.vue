<style lang="less" scoped>
.header {
  position:fixed;
  z-index:5;
  top:0;
  left:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 15px;
  width:100%;
  height: 53px;
  background:white;
  box-sizing:border-box;
}
.search {
  flex:5;
}
.download {
  flex:1;
}
.download_icon {
  float:right;
  width:14px;
  height:19px;
}
</style>

<template>
  <div id="header" class="header" :style="{ borderBottom:isBorder?'1px solid #F3F3F3':'' }">
    <Search class="search" />
    <div class="download">
      <img class="download_icon" src="/static/icon/download.png" alt srcset>
    </div>
  </div>
</template>

<script>
import Search from "./search";
export default {
  name: "Header",
  data(){
    return {
      isBorder:false
    }
  },
  components: {
    Search
  }
};
</script>


