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
    // width: 20px;
    height: 20px;
  }
  .item_name {
    padding:2px 0;
    font-size: 10px;
    color: #737373;
  }
}
</style>

<template>
  <div id="navigator" class="navigator">
    <div class="nav_item" :class="{ 'c':nav['id']==current }" v-for="nav in navs" :key="nav['id']" @click="switchNav(nav)">
      <img class="item_icon" :src="current==nav['id']?nav['icon_select']:nav['icon']">
      <div class="item_name">{{ nav['name'] }}</div>
    </div>
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
          icon: "/static/icon/home.png",
          icon_select:"/static/icon/home_select.gif",
          name: "首页"
        },
        {
          id: 2,
          url: "/game",
          icon: "/static/icon/game.gif",
          icon_select: "/static/icon/game_select.png",
          name: "游戏"
        },
        {
          id: 3,
          url: "/leaderboard",
          icon: "/static/icon/leaderboard.gif",
          icon_select: "/static/icon/leaderboard_select.png",
          name: "榜单"
        },
        {
          id: 4,
          url: "/appplanet",
          icon: "/static/icon/app_planet.gif",
          icon_select: "/static/icon/app_planet_select.png",
          name: "APP星球"
        },
        {
          id: 5,
          url: "/mine",
          icon: "/static/icon/mine.gif",
          icon_select: "/static/icon/mine_select.png",
          name: "我的"
        }
      ]
    };
  },
  methods:{
    switchNav(nav){
      this.current=nav['id'];
      this.$router.replace(nav['url'])
    }
  }
};
</script>


