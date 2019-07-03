<style lang="less">
* {
  -webkit-tap-highlight-color: transparent;
}
body {
  padding:0;
  margin:0;
  font-family: 微软雅黑;
}
.page_width {
  padding: 0 15px;
  box-sizing: border-box;
}
.top_placeholder {
  height: 33px;
}

/* 标题 */
/* 常规标题 */
.title_common {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main {
    display: flex;
    align-items: center;
    .icon {
      width: 16px;
    }
    .text {
      font-size: 16px;
      color: #000;
      font-weight: 600;
    }
  }
  .sub {
    display: flex;
    align-items: center;
    .icon {
      margin: 0 3px;
      width: 11px;
    }
    .text {
      color: #bfbfbf;
      font-size: 11px;
    }
  }
}

/* 徽章 */
/* 常规样式 */
.badge_common {
  display: flex;
  flex-wrap: wrap;
  .badge_item {
    margin: 0 11px 11px 0;
    padding: 0 14px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    color: #4f5051;
    font-size: 12px;
    text-align: center;
    border-radius: 13px;
    background: #f5f6f7;
  }
}
</style>


<template>
  <div id="app">
    <div class="default_view">
      <router-view />
      <Navigator/>
    </div>
  </div>
</template>

<script>
import Navigator from "./components/navigator";

export default {
  components: {
    Navigator
  }
};
</script>

