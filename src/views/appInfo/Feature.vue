<style lang="less" scoped>
.feature {
  padding-bottom:60px;
}
.app_list_warpper {
  margin-top: 15px;
  .app_list {
    margin-top: 8px;
  }
}
</style>

<template>
  <div id="feature_page" class="feature">
    <div class="page_width">
      <div class="other_users_like_apps app_list_warpper">
        <div class="title_common">
          <div class="main">
            <div class="text">安装过该应用的用户还喜欢</div>
          </div>
        </div>
        <AppList
          class="users_like_apps_list app_list"
          :apps="$store.state.apps.slice(0,5)"
          mode="column"
        />
      </div>
      <div class="similar_recommended app_list_warpper">
        <div class="title_common">
          <div class="main">
            <div class="text">热门影音视听应用</div>
          </div>
        </div>
        <AppList
          class="similar_recommended_apps app_list"
          :apps="$store.state.apps.slice(0,5)"
          mode="column"
        />
      </div>
      <div class="similar_recommended app_list_warpper">
        <div class="title_common">
          <div class="main">
            <div class="text">24小时热门下载</div>
          </div>
        </div>
        <AppList
          class="similar_recommended_apps app_list"
          :apps="$store.state.apps"
          mode="single-line-star-size"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppList from "../../components/appList";
export default {
  name: "FeaturePage",
  components: {
    AppList
  }
};
</script>
