<style lang="less" scoped>
.header_fixed {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 53px;
  background: white;
  box-sizing: border-box;
}
.header_separator {
  width: 100%;
  height: 93px;
}
.search {
  flex: 6;
}
.download {
  flex: 1;
}
.download_icon {
  margin-right:5px;
  float: right;
  width: 14px;
  height: 19px;
}
</style>

<template>
  <div id="header" class="header" >
    
    <div class="header_separator" :style="{height}"></div>
    <div class="header_fixed" :style="{ borderBottom:isBorder?'1px solid #F3F3F3':'' }">
      <Search class="search" @searchFocus="show" />
      <div class="download">
        <img class="download_icon" src="/static/icon/download.png" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./search";
export default {
  name: "Header",
  props:['height'],
  data() {
    return {
      isBorder: false
    };
  },
  methods:{
    show(e){
      this.isBorder=e.show
    }
  },
  components: {
    Search
  }
};
</script>


