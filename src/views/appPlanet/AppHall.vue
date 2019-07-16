<style lang="less" scoped>
.app_recommend_cover {
  width: 100%;
}

.zone {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.zone_item {
  width: 45vw;
  .item_img {
    width: 100%;
  }
}

.box {
  margin-top: 23px;
  .box_content {
    margin-top: 13px;
  }
}

.related_box {
  margin-top: 30px;
  .box_content {
    margin-top: 22px;
  }
  .app_list {
    margin-top:13px;
  }
}
.special_topic_item {
  width: 100%;
  .item_cover {
    width: 100%;
  }
}
</style>

<template>
  <div id="app_hall_page" class="app_hall page_width">
    <div class="app_recommendation">
      <img class="app_recommend_cover" src="/static/banner/app_recommendation_1.png" />
    </div>

    <div class="zone">
      <div class="zone_item">
        <img class="item_img" src="/static/icon/app_planet_child_zone.png" />
      </div>
      <div class="zone_item">
        <img class="item_img" src="/static/icon/app_planet_edu_zone.png" />
      </div>
    </div>

    <div class="box super_hot">
      <div class="title_common">
        <div class="main">
          <div class="text">超级热门</div>
        </div>
      </div>
      <AppList class="box_content app_list" :apps="$store.state.apps" mode="single-line" />
    </div>

    <div class="box hot_topic">
      <div class="title_common">
        <div class="main">
          <div class="text">热门话题</div>
        </div>
      </div>
      <div class="box_content topic">
        <TopicItem />
      </div>
    </div>

    <div class="box weekly_hot">
      <div class="title_common">
        <div class="main">
          <div class="text">本周飙升</div>
        </div>
      </div>
      <AppList class="box_content app_list" :apps="$store.state.apps" mode="single-line" />
    </div>

    <div class="box tv_movie">
      <div class="title_common">
        <div class="main">
          <div class="text">电视电影</div>
        </div>
      </div>
      <AppList class="box_content app_list" :apps="$store.state.apps" mode="single-line" />
    </div>

    <div class="box app_latest">
      <div class="title_common">
        <div class="main">
          <div class="text">应用首发</div>
        </div>
      </div>
      <AppList class="box_content app_list" :apps="$store.state.apps" mode="single-line" />
    </div>

    <div class="related_box" v-for="boxIndex in 3" :key="boxIndex">
      <div class="special_topic_item">
        <img src="/static/banner/special_topic_1.png" alt srcset class="item_cover" />
      </div>

      <div class="box_content" v-for="index in 3" :key="index">
        <div class="title_common">
          <div class="main">
            <div class="text">应用首发</div>
          </div>
        </div>
        <AppList class="app_list" :apps="$store.state.apps" mode="single-line" />
      </div>
    </div>
  </div>
</template>

<script>
import AppList from "../../components/appList";

import TopicItem from "../../components/topic/item";
export default {
  name: "AppHall",
  components: {
    AppList,
    TopicItem
  }
};
</script>


