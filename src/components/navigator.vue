<style lang="less" scoped>
.navigator {
  position: fixed;
  z-index:3;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  background:white;
}
.nav_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-decoration: none;
  &.c .item_name {
    color:#ff6243;
  }
  .item_icon {
    width: 20px;
    height: 20px;
  }
  .item_name {
    font-size: 8px;
    color: #737373;
  }
}
</style>

<template>
  <div id="navigator" class="navigator">
    <router-link :to="nav['url']" class="nav_item" :class="{ 'c':nav['id']==current }" v-for="nav in navs" :key="nav['id']">
      <img class="item_icon" :src="nav['icon']" alt srcset>
      <div class="item_name">{{ nav['name'] }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      current:"1",
      navs: [
        {
          id: 1,
          url: "/",
          icon: "/static/icon/home_select.gif",
          name: "首页"
        },
        {
          id: 2,
          url: "/game",
          icon: "/static/icon/game.gif",
          name: "游戏"
        },
        {
          id: 3,
          url: "/leaderboard",
          icon: "/static/icon/leaderboard.gif",
          name: "榜单"
        },
        {
          id: 4,
          url: "/appplanet",
          icon: "/static/icon/app_planet.gif",
          name: "APP星球"
        },
        {
          id: 5,
          url: "/mine",
          icon: "/static/icon/mine.gif",
          name: "我的"
        }
      ]
    };
  }
};
</script>


