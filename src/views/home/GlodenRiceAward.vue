<style lang="less" scoped>
.glodel_rice_award {
  background: #0a0402;
}

.top_banner {
  width: 100%;
}
.top_banner_img {
  width: 100%;
}

.issue_list {
  padding-bottom:20px;
}
.issue_title_pseudo() {
  content: "|||";
  height: 40px;
  line-height: 37px;
  color: #7c6130;
}
.issue_title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: #dfb157;
  &::before {
    .issue_title_pseudo();
    padding-right: 15px;
  }
  &::after {
    .issue_title_pseudo();
    padding-left: 15px;
  }
}
.app {
  margin: 0 5px;
  border-radius: 3px;
  background: #2e2015;
  .recommended {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
    height: 39px;
    .index_title {
      font-size: 14px;
      color: #f0f0ef;
    }
    .index_icon {
      margin-left: 5px;
      padding-top: 2px;
    }
    .index_icon_img {
      width: 14px;
    }
  }
  .app_banner {
    width: 100%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 0 2.6666vw;
    height: 73px;
    .left {
      flex: 12;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .head {
        display: flex;
        height: 50%;
        .app_icon_img {
          height: 13.333333333vw;
          transform: translate(3px, -7.6vw);
        }
        .details {
          display:flex;
          margin:1.6vw 0 0 8px;
          font-size: 15px;
          color: white;
        }
        .separator  {
          margin:0 5px;
          color:#584d44;
          font-size:10px;
          transform:translateY(2px);
        }
        .app_size {
          color:#b9b6b4;
          font-size:10px;
          transform:translateY(3px);
        }
      }
      .foot {
        height: 50%;
        .summary {
          font-size:13px;
          color:#b8b6b4;
        }
      }
    }
    .right {
      flex: 3;
      .install_button {
        margin-top:19px;
        width:54px;
        height:28px;
        line-height:28px;
        text-align:center;
        color:#37280b;
        font-size:14px;
        font-weight:600;
        border-radius:15px;
        background:#edbb53;
        border:2px solid #867a73;
      }
    }
  }
}
</style>

<template>
  <div id="glodel_rice_award_page" class="glodel_rice_award">
    <div class="top_banner">
      <img class="top_banner_img" src="/static/banner/golden_rice_award_banner.jpg" alt srcset />
    </div>
    <div class="issue_list">
      <div class="issue_item" v-for="index in 5" :key="index">
        <div class="issue_title">第{{ index }}期金米奖</div>
        <div class="app">
          <div class="recommended">
            <div class="index_title">推荐指数</div>
            <div class="index_icon">
              <img
                src="/static/icon/golden_heart.png"
                alt
                class="index_icon_img"
                v-for="index in 5"
                :key="index"
              />
            </div>
          </div>
          <img src="/static/banner/golden_rice_award_app_banner1.jpg" alt class="app_banner" />
          <div class="info">
            <div class="left">
              <div class="head">
                <img src="/static/app_icon/huoshanxiaoshipin.png" alt class="app_icon_img" />
                <div class="details">
                  <span class="app_name">隐形守护者</span>
                  <span class="separator">|</span>
                  <span class="app_size">59.0MB</span>
                </div>
              </div>
              <div class="foot">
                <span class="summary">创造属于自己的谍战传奇</span>
              </div>
            </div>
            <div class="right">
              <div class="install_button">安装</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlodelRoceAward"
};
</script>


