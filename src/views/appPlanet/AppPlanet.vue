<style lang="less" scoped>
</style>

<template>
  <div id="app_planet_page" class="app_planet">
    <div class="page_width">
      <Header />
    </div>
    <tabs defaultKey="1">
      <pane idkey="1" name="TODAY">
        <Today />
      </pane>
      <pane idkey="2" name="应用馆">
        <AppHall/>
      </pane>
      <pane idkey="3" name="视频"><Video/></pane>
    </tabs>
  </div>
</template>

<script>
import Header from "../../components/header";
import tabs from "../../components/tab/tabs";
import pane from "../../components/tab/pane";

import Today from "./Today";
import AppHall from "./AppHall";
import Video from "./Video";

export default {
  name: "AppPlanet",
  components: {
    Header,
    tabs,
    pane,
    Today,
    AppHall,
    Video
  }
};
</script>


