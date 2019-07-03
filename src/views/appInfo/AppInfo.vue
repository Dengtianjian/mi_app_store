<style lang="less" scoped>
.navigation_bar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 37px;
  box-sizing: border-box;
  .right {
    display: flex;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background: #fff;
    border: 1px solid #dddddc;
    border-radius: 50%;
    box-sizing: border-box;
    &:nth-child(even) {
      margin-left: 5px;
    }
    .icon {
      margin-left: -1px;
      height: 14px;
      fill: #4a4a4a;
    }
  }
}
.app_video {
  width: 100%;
  height: 202px;
  overflow: hidden;
  .video {
    width: 100%;
    // height:100%;
  }
}

.info_warpper {
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 11px;
  border-bottom: 1px solid #d6d6d6;
  .left_col {
    display: flex;
    align-items: center;
    .app_icon {
      width: 68px;
      height: 68px;
      border-radius: 11px;
      .icon_img {
        width: 68px;
        height: 68px;
        border-radius: 11px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-left: 9px;
      .name {
        font-size: 16px;
        color: #191919;
      }
      .size_type {
        display: flex;
        margin: 4px 0;
        font-size: 12px;
        color: #666666;
        .separator {
          margin: 0 14px;
        }
        .type {
          color: #33adff;
          .icon {
            fill: #33adff;
            height: 8px;
          }
        }
      }
      .detection_item {
        display: inline-block;
        margin-right: 6px;
        padding: 0 4px 3px;
        height: 14px;
        font-size: 10px;
        color: #25c16c;
        border: 1px solid #25c16c;
        border-radius: 14px;
      }
      .detection .icon {
        height: 10px;
      }
    }
  }
}

.right_col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .fraction {
    line-height: 16px;
    font-size: 18px;
    color: #000;
  }
  .star {
    display: flex;
    .star_item {
      margin: 0 1px;
      width: 11px;
      height: 11px;
      .icon {
        fill: #cdcdcd;
        width: 100%;
      }
      .icon.active {
        fill: #ff9600;
      }
    }
  }
}
</style>

<template>
  <div id="app_info" class="app_info">
    <div class="navigation_bar">
      <div class="left">
        <div class="button">
          <img class="icon" src="/static/icon/left_arrow_thin.png" />
        </div>
      </div>
      <div class="middle"></div>
      <div class="right">
        <div class="button search_open">
          <svg
            t="1561911121668"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5960"
          >
            <path
              d="M951.4 906.3L751.2 706.2c57.7-68 92.5-156 92.6-252.2 0-215.5-174.7-390.2-390.2-390.2S63.4 238.5 63.4 454s174.7 390.2 390.2 390.2c96.6-0.1 184.9-35.2 253-93.3L906.7 951c12.3 12.3 32.3 12.3 44.6 0 12.4-12.3 12.4-32.3 0.1-44.7zM453.6 776.9c-178.3 0-322.9-144.6-322.9-322.9s144.6-322.9 322.9-322.9c178.2 0.2 322.7 144.6 322.9 322.9 0 178.3-144.6 322.9-322.9 322.9z"
              p-id="5961"
              fill="#4A4A4A"
            />
          </svg>
        </div>
        <div class="button more">
          <svg
            t="1561911208201"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6739"
          >
            <path
              d="M232.194 510.007m-77.055 0a77.055 77.055 0 1 0 154.11 0 77.055 77.055 0 1 0-154.11 0Z"
              p-id="6740"
              fill="#4A4A4A"
            />
            <path
              d="M512.756 587.064c-42.559 0-77.058-34.5-77.058-77.057a77.06 77.06 0 0 1 115.586-66.734 77.062 77.062 0 0 1 38.527 66.734c0.001 42.557-34.499 77.057-77.055 77.057z"
              p-id="6741"
              fill="#4A4A4A"
            />
            <path
              d="M792.377 510.007m-77.055 0a77.055 77.055 0 1 0 154.11 0 77.055 77.055 0 1 0-154.11 0Z"
              p-id="6742"
              fill="#4A4A4A"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="app_video">
      <video class="video" src="/static/app_video/video.mp4" controls autoplay></video>
    </div>
    <div class="info_warpper">
      <div class="left_col">
        <div class="app_icon">
          <img src="/static/app_icon/douyin.png" alt srcset class="icon_img" />
        </div>
        <div class="info">
          <div class="name">抖音短视频</div>
          <div class="size_type">
            <div class="size">71.8M</div>
            <span class="separator">|</span>
            <div class="type">
              影音视听
              <svg
                t="1562129690578"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2062"
              >
                <path
                  d="M732.4098 516.374215L282.480265 66.44468A7.230107 7.230107 0 0 1 292.747017 56.250229L742.604251 506.107463a7.230107 7.230107 0 0 1-10.194451 10.266752z"
                  p-id="2063"
                />
                <path
                  d="M318.269293 30.655652l449.929535 449.929535a43.38064 43.38064 0 0 1-61.383605 61.311304L256.957989 92.039257a43.38064 43.38064 0 0 1 61.311304-61.383605z"
                  p-id="2064"
                />
                <path
                  d="M281.395749 957.55532L731.252983 507.553484a7.230107 7.230107 0 0 1 10.266752 10.266752L291.5902 967.749771a7.230107 7.230107 0 0 1-10.194451-10.194451z"
                  p-id="2065"
                />
                <path
                  d="M767.042011 543.414813L317.184777 993.416649a43.38064 43.38064 0 0 1-61.383605-61.383605l449.929535-449.857234a43.38064 43.38064 0 0 1 61.311304 61.311304z"
                  p-id="2066"
                />
              </svg>
            </div>
          </div>
          <div class="detection">
            <div class="detection_item">安全</div>
            <div class="detection_item">人工检测</div>
            <svg
              t="1562129690578"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2062"
            >
              <path
                d="M732.4098 516.374215L282.480265 66.44468A7.230107 7.230107 0 0 1 292.747017 56.250229L742.604251 506.107463a7.230107 7.230107 0 0 1-10.194451 10.266752z"
                fill="#25c16c"
                p-id="2063"
              />
              <path
                d="M318.269293 30.655652l449.929535 449.929535a43.38064 43.38064 0 0 1-61.383605 61.311304L256.957989 92.039257a43.38064 43.38064 0 0 1 61.311304-61.383605z"
                fill="#25c16c"
                p-id="2064"
              />
              <path
                d="M281.395749 957.55532L731.252983 507.553484a7.230107 7.230107 0 0 1 10.266752 10.266752L291.5902 967.749771a7.230107 7.230107 0 0 1-10.194451-10.194451z"
                fill="#25c16c"
                p-id="2065"
              />
              <path
                d="M767.042011 543.414813L317.184777 993.416649a43.38064 43.38064 0 0 1-61.383605-61.383605l449.929535-449.857234a43.38064 43.38064 0 0 1 61.311304 61.311304z"
                fill="#25c16c"
                p-id="2066"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="right_col">
        <div class="fraction">4.0</div>
        <div class="star">
          <div class="star_item" v-for="index in 5" :key="index">
            <svg
              t="1562135764580"
              class="icon"
              :class="{ active:index<=fraction }"
              viewBox="0 0 1032 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9665"
            >
              <path
                d="M962.220857 343.684193l-234.111204-29.242399c-14.621199 0-29.242399-7.396607-29.242399-22.017806L589.294265 58.484798c-29.242399-51.260205-102.348396-58.484798-138.987401 0l-102.348396 219.490005c0 14.621199-14.621199 22.017806-22.017806 22.017806L69.983666 336.4596C4.102261 343.684193-25.140137 409.565597 26.120067 460.825802l175.454393 160.833193c14.621199 14.621199 14.621199 22.017806 14.6212 36.639006L164.935455 906.858391c-7.396607 65.881404 43.863598 116.969595 109.745002 80.502603l212.093398-116.969595c14.621199-7.396607 29.242399-7.396607 36.639006 0l226.714598 124.366202c58.484798 29.242399 124.366202-7.396607 109.745002-80.502604l-51.260205-234.111204c0-14.621199 0-29.242399 14.6212-36.639005l190.247606-175.454393c36.466991-43.863598 21.845792-116.969595-51.260205-124.366202z"
                p-id="9666"
              />
              <path
                d="M523.584875 17.373425c-26.834201-1.376113-54.872501 11.352931-73.278011 41.111373l-102.348396 219.490005c0 14.621199-14.621199 22.017806-22.017806 22.017806L69.983666 336.4596C4.102261 343.684193-25.140137 409.565597 26.120067 460.825802l175.454393 160.833193c14.621199 14.621199 14.621199 22.017806 14.6212 36.639006L164.935455 906.858391c-7.396607 65.881404 43.863598 116.969595 109.745002 80.502603l212.093398-116.969595c14.621199-7.396607 29.242399-7.396607 36.639006 0l0.172014 0.172014v-853.189988z"
                p-id="9667"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <FullTab defaultkey="1">
      <FullTabPane title="详情" idkey="1">
        <keep-alive>
          <DetailsPage />
        </keep-alive>
      </FullTabPane>
      <FullTabPane title="评论(2万)" idkey="2">Comment</FullTabPane>
      <FullTabPane title="精选" idkey="3">Feature</FullTabPane>
    </FullTab>
  </div>
</template>

<script>
import FullTab from "../../components/fullTab/FullTab";
import FullTabPane from "../../components/fullTab/FullTabPane";

import DetailsPage from "./Details";

export default {
  name: "appInfo",
  data() {
    return {
      fraction: 4
    };
  },
  components: {
    FullTab,
    FullTabPane,
    DetailsPage
  }
};
</script>


