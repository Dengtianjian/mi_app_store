<style lang="less" scoped>
.carousel_map {
  margin-top: 2px;
  height: 122px;
  width: 100%;
  box-shadow: 0 3px 5px rgba(50, 50, 50, 0.2);
  border-radius: 10px;
}
.carousel_item {
  display: block;
  width: 100%;
  height: 100%;
}
.carousel_item .item_img {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

/* 推荐专区 */
.recommend_zone {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 18px;
  .zone_item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .zone_icon {
    width: 25px;
    height: 27px;
    text-align: center;
  }
  .zone_icon_img {
    height: 100%;
  }
  .zone_name {
    margin-top: 7px;
    font-size: 11px;
    color: #787676;
  }
}

.app_list {
  margin-top: 15px;
}
</style>

<template>
  <div id="recommend_page" class="recommend">
    <div class="carousel_map">
      <div class="carousel_item">
        <img class="item_img" src="/static/banner/home_banner.png" alt srcset>
      </div>
    </div>
    <div class="recommend_zone">
      <div class="zone_item" v-for="zone in recommendZones" :key="zone['id']">
        <div class="zone_icon">
          <img class="zone_icon_img" :src="zone['icon']" alt srcset>
        </div>
        <div class="zone_name">{{ zone['name'] }}</div>
      </div>
    </div>
    <AppList class="app_list" :apps="apps" mode="column" />
  </div>
</template>

<script>
import AppList from "../../components/appList";
export default {
  name: "recommendPage",
  mounted(){
    this.apps=this.$store.state.apps;
  },
  data() {
    return {
      recommendZones: [
        {
          id: 1,
          icon: "/static/icon/child_zone.gif",
          name: "儿童"
        },
        {
          id: 2,
          icon: "/static/icon/game_zone.gif",
          name: "小游戏"
        },
        {
          id: 3,
          icon: "/static/icon/test_zone.gif",
          name: "考试月"
        },
        {
          id: 4,
          icon: "/static/icon/shop_zone.gif",
          name: "购物"
        },
        {
          id: 5,
          icon: "/static/icon/red_envelope_zone.png",
          name: "红包"
        }
      ],
      apps: []
    };
  },
  components: {
    AppList
  }
};
</script>
