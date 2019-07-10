<style lang="less" scoped>
.comment_item {
  display: flex;
  margin-top: 11px;
  padding-bottom: 13px;
  border-bottom: 1px solid #dedede;
  &:last-child {
    border-bottom: 0;
  }
}
.user_avatar {
  flex-shrink: 1.1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.content_wrapper {
  flex: 9;
  margin-left: 8px;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 40px;
      .username {
        font-size: 14px;
        color: #333333;
      }
      .details {
        display: flex;
        font-size: 12px;
        color: #666666;
        .separator {
          margin: 0 5px;
          color: #e6e6e6;
        }
      }
    }
    .like {
      font-size: 12px;
      color: #4c4c4c;
      .icon {
        float: left;
        margin: -1px 2px 0 0;
        height: 17px;
      }
    }
  }
  .content {
    line-height: 23px;
    margin-top: 10px;
    font-size: 15px;
    color: #191919;
  }
}
</style>

<template>
  <div id="comment_component" class="comment">
    <div class="comment_list">
      <div class="comment_item" v-for="index in 5" :key="index">
        <img src="/static/user_avatar/avatar.jpg" alt srcset class="user_avatar" />
        <div class="content_wrapper">
          <div class="info">
            <div class="left">
              <div class="username">是谁的心呐</div>
              <div class="details">
                <div class="star">4.0</div>
                <span class="separator">|</span>
                <div class="version">V8.0.8</div>
                <span class="separator">|</span>
                <div class="date">2019-07-03</div>
              </div>
            </div>
            <div class="like">
              <svg
                t="1562763836820"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="10672"
              >
                <path
                  d="M545.6 121.1c24.3 0 45.3 18 51 43.7 0.5 2.3 1.1 4.5 1.9 6.6 4.5 23.2 6.8 46.7 6.8 70 0 39.9-6.4 79.1-18.9 116.4-5.7 17.1-2.9 35.9 7.6 50.5 10.5 14.6 27.4 23.3 45.4 23.3l206.6 0.2c1.7 0.2 3.4 0.4 5.1 0.4 18 0.7 34.5 10.9 44.2 27.1 6.5 10.9 9.4 23.5 8.5 36.5-0.1 1.9-0.2 3.8-0.3 6.8l-79.4 364.8-2.1 3.9c-4.7 9.7-11.3 17.4-19.7 23-7.5 5-15.8 7.8-24.7 8.4-1.2-0.1-2.4-0.1-3.6-0.1l-518-0.2c-1.8 0-3.7 0.1-5.5 0.3-1.8-0.2-3.7-0.3-5.6-0.3l-125-0.1 0.3-431.3 109.9-0.3c4.7 0 9.3-0.6 13.7-1.8 139.2-15.1 245.8-133.5 249.7-279 0.1-2.1 0-4.3-0.2-6.4-0.2-1.8-0.3-3.5-0.3-5.3 0-31.5 23.6-57.1 52.6-57.1m-259.5 293h0.3-0.3m-165.8 39.5h0.3-0.3M545.6 65.1c-60 0-108.6 50.6-108.6 113 0 3.5 0.2 6.9 0.5 10.2C434.3 308.3 344 405.5 230 414v0.7l-123.9 0.3c-1.5-0.2-3-0.3-4.5-0.3-20.6 0-37.3 17.4-37.3 38.8L64 920c0 21.5 16.7 38.8 37.3 38.8 2 0 4-0.2 5.9-0.5l137.8 0.1c1.8 0.3 3.7 0.5 5.6 0.5 1.9 0 3.7-0.2 5.5-0.5l518 0.2v0.2h0.2c20.2 0 40.7-5.7 59-17.8 17.5-11.6 30.6-27.4 39.2-45.4 2.4-3.6 4.2-7.6 5.4-12l80.6-370.5c1.1-4.4 0.8-8.8 1.1-13.1 1.7-23.5-3.4-47.6-16.3-69.2-20.2-33.9-54.4-52.9-90-54.4-1.8-0.3-3.7-0.5-5.6-0.5l-208.3-0.2c14.1-42 21.8-87.2 21.8-134.3 0-30.5-3.3-60.2-9.4-88.8l-0.5 0.1c-11.1-50.2-54.2-87.6-105.7-87.6z"
                  fill="#000000"
                  p-id="10673"
                />
                <path d="M209.1 436.8h56v490h-56z" fill="#000000" p-id="10674" />
              </svg>574
            </div>
          </div>
          <div
            class="content"
          >容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>


