<style lang="less" scoped>
.video_item {
  position:relative;
  margin-bottom:20px;
  border-radius:5px;
  box-shadow:0 5px 10px rgba(244,244,244,1);
  overflow:hidden;
  .video {
    display:block;
    width:100%;
  }
  .info {
    padding:13px;
    font-size:15px;
    border:1px solid #ebebeb;
    border-top:0;
    .title {
      line-height:22px;
      color:#343434;
    }
  }
}
</style>


<template>
  <div id="app_planet_video_page" class="video">
    <div class="page_width">
      <div class="video_item" v-for="index in 5" :key="index">
        <video class="video" src="/static/app_video/video.mp4" controls></video>
        <div class="info">
          <div class="title">王者荣耀：比原画漂亮十倍的皮肤，最后一个绝对全民女神</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"VideoPage"
}
</script>

