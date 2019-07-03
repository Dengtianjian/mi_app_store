<style lang="less" scoped>
.details {
  padding-bottom: 60px;
}
.simple_introduce {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 66px;
  font-size: 12px;
  color: #666666;
  .introduce {
    width: 80%;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: italic;
    white-space: nowrap;
  }
  .more_info {
    margin-top: 5px;
    color: #33adff;
    svg {
      width: 8px;
    }
  }
}
.app_images {
  display: flex;
  align-items: center;
  width: 100%;
  height: 222px;
  overflow-y: hidden;
  overflow-x: scroll;
  .images_item {
    margin: 0 3px;
    width: 126px;
  }
}
.app_tags {
  padding: 8px 10px 0;
  overflow-x: scroll;
  white-space: nowrap;
  .tag_item {
    display: inline-block;
    margin: 0 5px 5px 0;
    padding: 0 13px;
    height: 35px;
    line-height: 35px;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    background: #77d2d8;
    opacity: 0.5;
  }
}
.recommend_apps {
  margin-top: 20px;
  .app_list {
    margin-top: 13px;
  }
}

.author_nav {
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  margin:33px 0;
  .nav_item {
    color:#0099ff;
    font-size:13px;
    text-decoration:none;
  }
  .separator {
    color:#ccc;
  }
}
</style>

<template>
  <div id="app_details_page" class="details">
    <div class="simple_introduce">
      <div class="introduce">互联网招聘、求职、找工作App互联网招聘、求职、找工作App互联网招聘、求职、找工作App</div>
      <div class="more_info">
        更多信息
        <svg
          t="1562129690578"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2062"
          fill="#33adff"
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
    <div class="app_images">
      <img :src="image" class="images_item" v-for="image in appImages" :key="image" />
    </div>
    <div class="app_tags">
      <div class="tag_item" v-for="tag in tags" :key="tag['id']" v-rainbow>{{ tag['text'] }}</div>
    </div>
    <div class="users_like_apps recommend_apps">
      <div class="page_width">
        <div class="title_common">
          <div class="main">
            <div class="text">安装该应用的用户还喜欢</div>
          </div>
        </div>
        <AppList class="app_list" :apps="$store.state.apps" mode="single-line-star-size" />
      </div>
    </div>
    <div class="hot_current_type_apps recommend_apps">
      <div class="page_width">
        <div class="title_common">
          <div class="main">
            <div class="text">热门影音视听应用</div>
          </div>
        </div>
        <AppList class="app_list" :apps="$store.state.apps" mode="single-line-star-size" />
      </div>
    </div>
    <div class="may_also_like_apps recommend_apps">
      <div class="page_width">
        <div class="title_common">
          <div class="main">
            <div class="text">猜你还喜欢</div>
          </div>
        </div>
        <AppList class="app_list" :apps="$store.state.apps" mode="single-line-star-size" />
      </div>
    </div>

    <div class="author_nav">
      <a href="/" class="nav_item">权限详情</a>
      <span class="separator">|</span>
      <a href="/" class="nav_item">同开发者应用</a>
      <span class="separator">|</span>
      <a href="/" class="nav_item">应用举报</a>
    </div>

  </div>
</template>

<script>
import AppList from "../../components/appList";
export default {
  name: "DetailsPage",
  data() {
    return {
      appImages: [
        "/static/app_images/douyin/1.jpg",
        "/static/app_images/douyin/2.jpg",
        "/static/app_images/douyin/3.jpg",
        "/static/app_images/douyin/4.jpg",
        "/static/app_images/douyin/5.jpg"
      ],
      tags: [
        { id: 1, text: "音乐" },
        { id: 2, text: "社交" },
        { id: 3, text: "摄影" },
        { id: 4, text: "短视频" },
        { id: 5, text: "娱乐" },
        { id: 6, text: "卡通" },
        { id: 7, text: "情怀" },
        { id: 8, text: "卡丁车" },
        { id: 9, text: "漂移" }
      ]
    };
  },
  directives: {
    rainbow(value) {
      return (value.style.background =
        "#" + (Math.random() * 200).toString(16).slice(3, 9));
    }
  },
  components: {
    AppList
  }
};
</script>


