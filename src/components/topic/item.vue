<style lang="less" scoped>
.topic_item {
  display: flex;
  padding: 12px;
  width: 100%;
  height: 32vw;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(244, 244, 244, 1);
  box-sizing: border-box;
}
.cover {
  width: 30vw;
}
.cover_img {
  width: 100%;
}
.info {
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  padding-top: 3px;
  margin-left: 10px;
  width:70vw;
  .title {
    font-size: 14px;
    color: #1a1a1a;
  }
  .title_icon {
    margin-right: 3px;
    width: 16px;
  }
  .slogan {
    margin-top:8spx;
    font-size:10px;
    color:#999999;
  }
  .bottom {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:0.8vh;
    .participate_count {
      font-size:10px;
      color:#7a7a7a;
    }
    .participate_button {
      width:23vw;
      height:4.2vh;
      line-height:4.2vh;
      text-align:center;
      color:#0bae73;
      font-size:12px;
      border:1px solid #0bae73;
      border-radius:13px;
    }
  }
}
</style>

<template>
  <div id="topic_item_component" class="topic_item">
    <div class="cover">
      <img src="/static/banner/topic_cover_1.png" class="cover_img" />
    </div>
    <div class="info">
      <div class="title">
        <img src="/static/icon/topic_icon.png" alt srcset class="title_icon" />
        <span class="title_text">安利一款你最喜欢的游戏</span>
      </div>
      <p class="slogan">稳住，我们能赢稳住</p>
      <div class="bottom">
        <span class="participate_count">28人参与</span>
        <div class="participate_button">立即参加</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicItem"
};
</script>


