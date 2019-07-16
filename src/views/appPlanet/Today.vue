<style lang="less" scoped>
.article_item {
  margin-bottom: 20px;
  width: 100%;
}
.articel_banner {
  width: 100%;
}
</style>

<template>
  <div id="today_page" class="today page_width">
    <div class="article_list">
      <div class="article_item" v-for="item in articleList" :key="item['id']">
        <img class="articel_banner" :src="item['banner']" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Today",
  data() {
    return {
      articleList: [
        { id: 1, banner: "/static/banner/app_planet_today_1.png" },
        { id: 2, banner: "/static/banner/app_planet_today_2.png" },
        { id: 3, banner: "/static/banner/app_planet_today_3.png" },
        { id: 4, banner: "/static/banner/app_planet_today_4.png" }
      ]
    };
  }
};
</script>


